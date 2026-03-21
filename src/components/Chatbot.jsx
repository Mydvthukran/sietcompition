import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaMicrophone, FaStop } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/useLanguage';
import { getChatbotResponseWithMeta } from '../data/chatbot';
import { getTranslation } from '../data/translations';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem('chatbot_messages');
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [supportsVoice, setSupportsVoice] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const { language } = useLanguage();
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const suggestedPrompts = {
    en: [
      'How can I apply for admission?',
      'What programs are available?',
      'Tell me about placement support',
      'Where is the college located?',
    ],
    hi: [
      'प्रवेश कैसे लें?',
      'कौन-कौन से कार्यक्रम उपलब्ध हैं?',
      'प्लेसमेंट सपोर्ट के बारे में बताएं',
      'कॉलेज कहाँ स्थित है?',
    ],
  };

  useEffect(() => {
    localStorage.setItem('chatbot_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupportsVoice(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(' ');
      setInput(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    setSupportsVoice(true);

    return () => {
      recognition.stop();
    };
  }, [language]);

  const handleVoiceToggle = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    setIsListening(true);
    recognitionRef.current.start();
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setShowHandoff(false);
    setIsTyping(true);

    try {
      const apiUrl = import.meta.env.VITE_CHAT_API_URL || '/api/chat';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text, language }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const botMessage = { text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setShowHandoff(Boolean(data.handoff));
    } catch {
      const faqMeta = getChatbotResponseWithMeta(text, language);
      const fallbackText = faqMeta.confidence >= 0.6
        ? faqMeta.response
        : `${faqMeta.response}\n\n${language === 'hi' ? 'कृपया एडमिन टीम से संपर्क करें।' : 'Please connect to admin team for exact details.'}`;
      const botMessage = { text: fallbackText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setShowHandoff(faqMeta.confidence < 0.6);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatbot_messages');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="chatbot-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="chatbot-panel"
            style={{
              backdropFilter: 'blur(10px)',
              background: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-head-row">
                <FaRobot size={24} />
                <div>
                  <h3 className="font-bold">{getTranslation(language, 'chatbot.title')}</h3>
                  <p className="text-xs opacity-90">{getTranslation(language, 'chatbot.subtitle')}</p>
                </div>
                <button className="chatbot-clear" onClick={clearChat}>{getTranslation(language, 'chatbot.clear')}</button>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.length === 0 && (
                <div className="chatbot-empty">
                  <FaRobot size={42} className="mx-auto mb-4 opacity-50" />
                  <p>{getTranslation(language, 'chatbot.greeting')}</p>
                  <div className="chatbot-suggestions">
                    {suggestedPrompts[language].map((prompt) => (
                      <button
                        key={prompt}
                        className="chatbot-chip"
                        onClick={() => sendMessage(prompt)}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} message={msg} />
              ))}
              {isTyping && (
                <div className="chatbot-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>

            {/* Input */}
            <div className="chatbot-inputbar">
                {supportsVoice && (
                  <button
                    onClick={handleVoiceToggle}
                    className={`chatbot-mic ${isListening ? 'listening' : ''}`}
                    title={getTranslation(language, 'chatbot.listening')}
                  >
                    {isListening ? <FaStop /> : <FaMicrophone />}
                  </button>
                )}
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={getTranslation(language, 'chatbot.placeholder')}
                  className="chatbot-input"
                />
                <button
                  onClick={handleSend}
                  className="chatbot-send"
                >
                  <FaPaperPlane />
                </button>
            </div>
            {showHandoff && (
              <div className="chatbot-handoff-wrap">
                <a
                  className="chatbot-handoff-btn"
                  href="mailto:info@sietpanchkula.ac.in?subject=Need%20assistance%20from%20SIET%20admin"
                >
                  {getTranslation(language, 'chatbot.connectAdmin')}
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`chatbot-row ${isBot ? 'left' : 'right'}`}
    >
      <div
        className={`chatbot-bubble ${isBot ? 'bot' : 'user'}`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </motion.div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chatbot;
