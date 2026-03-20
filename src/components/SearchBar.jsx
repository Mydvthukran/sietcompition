import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const searchData = [
    { type: 'course', name: 'Computer Science & Engineering', keywords: ['cse', 'computer', 'software'] },
    { type: 'course', name: 'Electronics & Communication', keywords: ['ece', 'electronics', 'vlsi'] },
    { type: 'course', name: 'Mechanical Engineering', keywords: ['me', 'mechanical', 'design'] },
    { type: 'faculty', name: 'Dr. Rajesh Kumar', keywords: ['rajesh', 'cse', 'faculty'] },
    { type: 'faculty', name: 'Prof. Priya Singh', keywords: ['priya', 'ece', 'professor'] },
    { type: 'notice', name: 'Final Exam Schedule', keywords: ['exam', 'schedule', 'final'] },
    { type: 'notice', name: 'Admission Open', keywords: ['admission', 'apply', 'entrance'] },
    { type: 'facility', name: 'Advanced Laboratory', keywords: ['lab', 'laboratory', 'research'] },
    { type: 'facility', name: 'Library', keywords: ['library', 'books', 'reading'] },
  ];

  const handleSearch = (value) => {
    setQuery(value);
    if (value.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.keywords.some((k) => k.includes(value.toLowerCase()))
    );

    setResults(filtered);
    setIsOpen(filtered.length > 0);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={getTranslation(language, 'search.placeholder')}
          className="w-full px-6 py-4 pr-12 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white shadow-lg"
        />
        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-20 max-h-96 overflow-y-auto"
          >
            {results.length > 0 ? (
              results.map((result, idx) => (
                <SearchResult key={idx} result={result} onClick={() => setIsOpen(false)} />
              ))
            ) : (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {getTranslation(language, 'search.noResults')}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const SearchResult = ({ result, onClick }) => {
  const typeColors = {
    course: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
    faculty: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
    notice: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300',
    facility: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300',
  };

  return (
    <motion.div
      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
      className="p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeColors[result.type]}`}>
          {result.type}
        </span>
        <span className="text-gray-800 dark:text-white">{result.name}</span>
      </div>
    </motion.div>
  );
};

SearchResult.propTypes = {
  result: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
