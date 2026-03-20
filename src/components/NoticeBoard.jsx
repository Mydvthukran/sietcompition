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
    <section className="notice-section">
      <div className="container notice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="notice-header"
        >
          <h2 className="notice-title">
            {getTranslation(language, 'notices.title')}
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="notice-filters">
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
        <div className="notice-grid">
          {filteredNotices.map((notice, idx) => (
            <NoticeCard key={notice.id} notice={notice} index={idx} />
          ))}
        </div>

        {/* Scrolling Ticker */}
        <div className="notice-ticker-wrap">
          <motion.div
            className="notice-ticker"
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
    className={`notice-filter-btn ${active ? 'active' : ''}`}
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
      className="notice-card"
    >
      {notice.urgent && (
        <div className="notice-urgent">
          {getTranslation(language, 'notices.urgent')}
        </div>
      )}
      <div className="notice-body">
        <FaBell className="notice-icon" />
        <div>
          <h3 className="notice-card-title">
            {notice.title[language]}
          </h3>
          <p className="notice-card-text">
            {notice.description[language]}
          </p>
        </div>
      </div>
      <div className="notice-meta">
        <span className="notice-date">{notice.date}</span>
        <span className="notice-category">
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
