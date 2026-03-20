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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {getTranslation(language, 'dashboard.title')}
          </h2>
        </motion.div>

        {/* View Type Selector */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewType('student')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
              viewType === 'student'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <FaUser />
            {getTranslation(language, 'dashboard.student')}
          </button>
          <button
            onClick={() => setViewType('faculty')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
              viewType === 'faculty'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
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
              className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6 dark:text-white">
                {getTranslation(language, 'dashboard.loginPrompt')}
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
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
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl text-blue-600">{icon}</div>
        <h3 className="text-xl font-bold dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
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
