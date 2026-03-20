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
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl opacity-90">Numbers that speak for excellence</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            value={statsData.students}
            label={getTranslation(language, 'stats.students')}
            suffix="+"
          />
          <StatCard
            value={statsData.placementRate}
            label={getTranslation(language, 'stats.placements')}
            suffix="%"
          />
          <StatCard
            value={statsData.companies}
            label={getTranslation(language, 'stats.companies')}
            suffix="+"
          />
          <StatCard
            value={statsData.alumni}
            label={getTranslation(language, 'stats.alumni')}
            suffix="+"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-5"
          >
            <Bar data={barData} options={chartOptions} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-5"
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

const StatCard = ({ value, label, suffix = '' }) => {
  const [count, ref] = useAnimatedCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
    >
      <div className="text-5xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg opacity-90">{label}</div>
    </motion.div>
  );
};

StatCard.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export default Stats;
