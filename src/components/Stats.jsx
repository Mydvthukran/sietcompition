import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useAnimatedCounter } from '../hooks/useAnimations';
import { statsData } from '../data/content';
import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Stats = () => {
  const { language } = useLanguage();

  const barData = {
    labels: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'IT'],
    datasets: [
      {
        label: language === 'en' ? 'Department Strength' : 'विभागीय क्षमता',
        data: [420, 310, 250, 270, 230, 290],
        backgroundColor: ['#0ea5a0', '#3b82f6', '#f97316', '#8b5cf6', '#14b8a6', '#f43f5e'],
        borderRadius: 8,
      },
    ],
  };

  const pieData = {
    labels: ['Placed', 'Higher Studies', 'Entrepreneurship'],
    datasets: [
      {
        data: [68, 22, 10],
        backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.15)' },
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.15)' },
      },
    },
  };

  return (
    <section className="stats-section">
      {/* Background Pattern */}
      <div className="stats-bg-pattern" aria-hidden="true">
        <div className="stats-bg-grid" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="stats-glow stats-glow-a" aria-hidden="true"></div>
      <div className="stats-glow stats-glow-b" aria-hidden="true"></div>

      <div className="container stats-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="stats-heading"
        >
          <h2 className="stats-title">Our Achievements</h2>
          <p className="stats-subtitle">Numbers that speak for excellence</p>
        </motion.div>

        <div className="stats-card-grid">
          <StatCard
            value={statsData.students}
            label={getTranslation(language, 'stats.students')}
            suffix="+"
            index={0}
          />
          <StatCard
            value={statsData.placementRate}
            label={getTranslation(language, 'stats.placements')}
            suffix="%"
            index={1}
          />
          <StatCard
            value={statsData.companies}
            label={getTranslation(language, 'stats.companies')}
            suffix="+"
            index={2}
          />
          <StatCard
            value={statsData.alumni}
            label={getTranslation(language, 'stats.alumni')}
            suffix="+"
            index={3}
          />
        </div>

        <div className="stats-chart-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="stats-chart-card"
          >
            <Bar data={barData} options={chartOptions} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="stats-chart-card"
          >
            <Pie data={pieData} options={{
              responsive: true,
              plugins: {
                legend: {
                  labels: {
                    color: '#ffffff',
                  },
                },
              },
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, suffix = '', index = 0 }) => {
  const [count, ref] = useAnimatedCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 180, damping: 14 }}
      className="stats-card"
    >
      <div className="stats-card-value">
        {count}{suffix}
      </div>
      <div className="stats-card-label">{label}</div>
    </motion.div>
  );
};

StatCard.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  index: PropTypes.number,
};

export default Stats;
