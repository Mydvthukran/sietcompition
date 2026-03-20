import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaTextHeight, FaAdjust, FaGlobe } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';

const AccessibilityPanel = () => {
  const { isDark, toggleTheme, fontSize, increaseFontSize, decreaseFontSize, isHighContrast, toggleHighContrast } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-20 right-0 z-30 bg-white dark:bg-gray-800 shadow-xl rounded-l-2xl p-4 space-y-3"
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        title={getTranslation(language, 'accessibility.darkMode')}
      >
        {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-600" />}
        <span className="text-sm dark:text-white">{getTranslation(language, 'accessibility.darkMode')}</span>
      </button>

      {/* Font Size Controls */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">{getTranslation(language, 'accessibility.fontSize')}</p>
        <div className="flex gap-2">
          <button
            onClick={decreaseFontSize}
            className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
          >
            A-
          </button>
          <button
            onClick={increaseFontSize}
            className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
          >
            A+
          </button>
        </div>
        <p className="text-xs text-center text-gray-500">{fontSize}%</p>
      </div>

      {/* High Contrast */}
      <button
        onClick={toggleHighContrast}
        className="flex items-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <FaAdjust className={isHighContrast ? 'text-blue-600' : 'text-gray-500'} />
        <span className="text-sm dark:text-white">{getTranslation(language, 'accessibility.highContrast')}</span>
      </button>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FaGlobe />
        <span className="text-sm">{language === 'en' ? 'हिन्दी' : 'English'}</span>
      </button>
    </motion.div>
  );
};

export default AccessibilityPanel;
