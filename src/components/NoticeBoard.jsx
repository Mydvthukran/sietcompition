import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaFilter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/useLanguage';
import { notices } from '../data/content';
import { getTranslation } from '../data/translations';

const NoticeBoard = () => {
  const [filter, setFilter] = useState('all');
  const { language } = useLanguage();

  const filteredNotices = filter === 'all'
    ? notices
    : notices.filter(n => n.category === filter);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {getTranslation(language, 'notices.title')}
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            label={getTranslation(language, 'notices.filterAll')}
          />
          <FilterButton
            active={filter === 'exam'}
            onClick={() => setFilter('exam')}
            label={getTranslation(language, 'notices.filterExam')}
          />
          <FilterButton
            active={filter === 'admission'}
            onClick={() => setFilter('admission')}
            label={getTranslation(language, 'notices.filterAdmission')}
          />
          <FilterButton
            active={filter === 'event'}
            onClick={() => setFilter('event')}
            label={getTranslation(language, 'notices.filterEvent')}
          />
        </div>

        {/* Notices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice, idx) => (
            <NoticeCard key={notice.id} notice={notice} index={idx} />
          ))}
        </div>

        {/* Scrolling Ticker */}
        <div className="mt-12 bg-blue-600 text-white py-3 overflow-hidden">
          <motion.div
            className="whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {notices.map((notice, idx) => (
              <span key={idx} className="mx-8">
                <FaBell className="inline mr-2" />
                {notice.title[language]} - {notice.date}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FilterButton = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
      active
        ? 'bg-blue-600 text-white shadow-lg'
        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`}
  >
    <FaFilter size={12} />
    {label}
  </button>
);

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const NoticeCard = ({ notice, index }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
    >
      {notice.urgent && (
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
          {getTranslation(language, 'notices.urgent')}
        </div>
      )}
      <div className="flex items-start gap-3 mb-3">
        <FaBell className="text-blue-600 text-xl flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
            {notice.title[language]}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {notice.description[language]}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">{notice.date}</span>
        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
          {notice.category}
        </span>
      </div>
    </motion.div>
  );
};

NoticeCard.propTypes = {
  notice: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    urgent: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default NoticeBoard;
