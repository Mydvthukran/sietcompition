import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/useLanguage';
import { getChatbotResponse } from '../data/chatbot';
import { getTranslation } from '../data/translations';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { language } = useLanguage();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse = getChatbotResponse(input, language);
      const botMessage = { text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInput('');
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
              <div className="flex items-center gap-3">
                <FaRobot size={24} />
                <div>
                  <h3 className="font-bold">{getTranslation(language, 'chatbot.title')}</h3>
                  <p className="text-xs opacity-90">{getTranslation(language, 'chatbot.subtitle')}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400 mt-20">
                  <FaRobot size={48} className="mx-auto mb-4 opacity-50" />
                  <p>{getTranslation(language, 'chatbot.greeting')}</p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} message={msg} />
              ))}
            </div>

            {/* Input */}
            <div className="chatbot-inputbar">
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
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md'
            : 'bg-blue-600 text-white shadow-md'
        }`}
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
