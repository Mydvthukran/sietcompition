import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaClock, FaBell, FaUser, FaChalkboardTeacher } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

const Dashboard = () => {
  const [viewType, setViewType] = useState('student');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { language } = useLanguage();

  return (
    <section className="dashboard-section">
      <div className="container dashboard-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="dashboard-header"
        >
          <h2 className="dashboard-title">
            {getTranslation(language, 'dashboard.title')}
          </h2>
        </motion.div>

        {/* View Type Selector */}
        <div className="dashboard-view-toggle">
          <button
            onClick={() => setViewType('student')}
            className={`dashboard-toggle-btn ${viewType === 'student' ? 'active' : ''}`}
          >
            <FaUser />
            {getTranslation(language, 'dashboard.student')}
          </button>
          <button
            onClick={() => setViewType('faculty')}
            className={`dashboard-toggle-btn ${viewType === 'faculty' ? 'active' : ''}`}
          >
            <FaChalkboardTeacher />
            {getTranslation(language, 'dashboard.faculty')}
          </button>
        </div>

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dashboard-login-card"
            >
              <h3 className="dashboard-login-title">
                {getTranslation(language, 'dashboard.loginPrompt')}
              </h3>
              <div className="dashboard-login-fields">
                <input
                  type="text"
                  placeholder="Username"
                  className="dashboard-input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="dashboard-input"
                />
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="dashboard-login-btn"
                >
                  {getTranslation(language, 'dashboard.login')}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {viewType === 'student' ? <StudentDashboard /> : <FacultyDashboard />}
              <div className="dashboard-logout-wrap">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="dashboard-logout-btn"
                >
                  {getTranslation(language, 'dashboard.logout')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const StudentDashboard = () => {
  const { language } = useLanguage();

  return (
    <div className="dashboard-grid">
      <DashboardCard
        icon={<FaBook />}
        title={getTranslation(language, 'dashboard.courses')}
        items={['Data Structures', 'Web Development', 'Database Systems', 'Operating Systems']}
      />
      <DashboardCard
        icon={<FaClock />}
        title={getTranslation(language, 'dashboard.timetable')}
        items={['Mon: 9AM - DS Lab', 'Tue: 10AM - Web Dev', 'Wed: 11AM - DBMS', 'Thu: 2PM - OS']}
      />
      <DashboardCard
        icon={<FaBell />}
        title={getTranslation(language, 'dashboard.notices')}
        items={['Exam on March 25', 'Project Submission', 'Tech Fest Registration', 'Workshop on AI']}
      />
    </div>
  );
};

const FacultyDashboard = () => {
  const { language } = useLanguage();

  return (
    <div className="dashboard-grid">
      <DashboardCard
        icon={<FaClock />}
        title={getTranslation(language, 'dashboard.schedule')}
        items={['Mon: CSE-A 9AM', 'Tue: CSE-B 10AM', 'Wed: Lab 2PM', 'Thu: CSE-C 11AM']}
      />
      <DashboardCard
        icon={<FaBell />}
        title={getTranslation(language, 'dashboard.announcements')}
        items={['Faculty Meeting on March 22', 'Submit Grades by March 30', 'Workshop on Teaching Methods']}
      />
      <DashboardCard
        icon={<FaBook />}
        title="Classes"
        items={['CSE-A (60 students)', 'CSE-B (58 students)', 'Lab Section (30 students)']}
      />
    </div>
  );
};

const DashboardCard = ({ icon, title, items }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="dashboard-card"
    >
      <div className="dashboard-card-head">
        <div className="dashboard-card-icon">{icon}</div>
        <h3 className="dashboard-card-title">{title}</h3>
      </div>
      <ul className="dashboard-card-list">
        {items.map((item, idx) => (
          <li key={idx} className="dashboard-card-list-item">
            <span className="dashboard-dot">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

DashboardCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dashboard;
