/* eslint-env node */
/* global process */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getChatbotResponseWithMeta } from '../src/data/chatbot.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 8787);
const PROVIDER = (process.env.CHAT_PROVIDER || 'openai').toLowerCase();

app.use(cors());
app.use(express.json());

const openaiClient = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const geminiClient = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

const buildSystemPrompt = (language) => {
  if (language === 'hi') {
    return 'आप SIET (State Institute of Engineering & Technology), Sector 26, Panchkula के आधिकारिक सहायक हैं। केवल कॉलेज से संबंधित सही जानकारी दें। अगर उत्तर निश्चित न हो तो उपयोगकर्ता को एडमिन से संपर्क करने को कहें: info@sietpanchkula.ac.in';
  }

  return 'You are the official assistant for SIET (State Institute of Engineering & Technology), Sector 26, Panchkula. Give accurate, concise college-related information. If uncertain, suggest contacting admin at info@sietpanchkula.ac.in.';
};

const generateWithOpenAI = async (message, language) => {
  if (!openaiClient) return null;

  const completion = await openaiClient.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    temperature: 0.4,
    messages: [
      { role: 'system', content: buildSystemPrompt(language) },
      { role: 'user', content: message },
    ],
  });

  return completion.choices?.[0]?.message?.content?.trim() || null;
};

const generateWithGemini = async (message, language) => {
  if (!geminiClient) return null;

  const model = geminiClient.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-1.5-flash' });
  const result = await model.generateContent(`${buildSystemPrompt(language)}\n\nUser: ${message}`);
  const text = result.response?.text?.();
  return text ? text.trim() : null;
};

const generateAiReply = async (message, language) => {
  if (PROVIDER === 'gemini') {
    return generateWithGemini(message, language);
  }

  return generateWithOpenAI(message, language);
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, provider: PROVIDER });
});

app.post('/api/chat', async (req, res) => {
  const { message, language = 'en' } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message is required' });
  }

  const faqMeta = getChatbotResponseWithMeta(message, language);

  if (faqMeta.confidence >= 0.6) {
    return res.json({
      reply: faqMeta.response,
      source: 'faq',
      confidence: faqMeta.confidence,
      handoff: false,
    });
  }

  try {
    const aiReply = await generateAiReply(message, language);

    if (aiReply) {
      return res.json({
        reply: aiReply,
        source: PROVIDER,
        confidence: 0.55,
        handoff: false,
      });
    }
  } catch {
    // Continue to fallback handoff response below.
  }

  const handoffReply = language === 'hi'
    ? 'मैं इस प्रश्न का निश्चित उत्तर नहीं दे पा रहा हूं। कृपया एडमिन टीम से संपर्क करें: info@sietpanchkula.ac.in या +91-172-2590290'
    : "I'm not fully confident about this answer. Please connect with the admin team: info@sietpanchkula.ac.in or +91-172-2590290.";

  return res.json({
    reply: handoffReply,
    source: 'fallback',
    confidence: faqMeta.confidence,
    handoff: true,
  });
});

app.listen(PORT, () => {
  console.log(`Chat API running on http://localhost:${PORT}`);
});
