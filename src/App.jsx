import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { getTranslation } from './data/translations';
import './App.css';

// Lazy load components for code splitting
const Chatbot = lazy(() => import('./components/Chatbot'));
const AccessibilityPanel = lazy(() => import('./components/AccessibilityPanel'));
const NoticeBoard = lazy(() => import('./components/NoticeBoard'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Stats = lazy(() => import('./components/Stats'));
const Gallery = lazy(() => import('./components/Gallery'));
const SearchBar = lazy(() => import('./components/SearchBar'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                  🎓
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold leading-tight">
                  {getTranslation(language, 'instituteName')}
                </h1>
                <p className="text-sm opacity-90">{getTranslation(language, 'tagline')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`lg:block ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 shadow-lg`}>
          <div className="container mx-auto px-4">
            <ul className="flex flex-col lg:flex-row lg:justify-center gap-1 lg:gap-4 py-2">
              {['home', 'about', 'programs', 'facilities', 'notices', 'dashboard', 'gallery', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
                  >
                    {getTranslation(language, `nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-purple-700">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random(),
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [null, 0, Math.random()],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {getTranslation(language, 'hero.welcome')}
            </h2>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              {getTranslation(language, 'hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80">
              {getTranslation(language, 'hero.description')}
            </p>

            {/* Search Bar */}
            <div className="mb-8 max-w-2xl mx-auto">
              <Suspense fallback={<div className="h-16"></div>}>
                <SearchBar />
              </Suspense>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-full font-bold shadow-lg hover:bg-yellow-400 transition-colors"
              >
                {getTranslation(language, 'hero.learnMore')}
              </motion.a>
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
              >
                {getTranslation(language, 'hero.ourPrograms')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {getTranslation(language, 'about.title')}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {getTranslation(language, 'about.description1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(language, 'about.description2')}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '15+', label: 'about.yearsLabel' },
              { value: '50+', label: 'about.facultyLabel' },
              { value: '1000+', label: 'about.alumniLabel' },
              { value: '100%', label: 'about.placementLabel' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 rounded-2xl text-center shadow-xl"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {item.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  {getTranslation(language, item.label)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Stats />
      </Suspense>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {getTranslation(language, 'programs.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {getTranslation(language, 'programs.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['cse', 'ece', 'me', 'ee', 'ce', 'it'].map((prog, idx) => (
              <motion.div
                key={prog}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-500 transition-all"
              >
                <div className="text-5xl mb-4">
                  {prog === 'cse' ? '💻' : prog === 'ece' ? '⚡' : prog === 'me' ? '⚙️' : prog === 'ee' ? '🔌' : prog === 'ce' ? '🏗️' : '📡'}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {getTranslation(language, `programs.${prog}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {getTranslation(language, `programs.${prog}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {getTranslation(language, 'facilities.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['labs', 'library', 'sports', 'hostel', 'transport', 'placement'].map((facility, idx) => (
              <motion.div
                key={facility}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                  <span>{facility === 'labs' ? '🔬' : facility === 'library' ? '📚' : facility === 'sports' ? '🏋️' : facility === 'hostel' ? '🏠' : facility === 'transport' ? '🚌' : '💼'}</span>
                  {getTranslation(language, `facilities.${facility}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {getTranslation(language, `facilities.${facility}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section id="notices">
        <Suspense fallback={<LoadingFallback />}>
          <NoticeBoard />
        </Suspense>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard">
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard />
        </Suspense>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery />
        </Suspense>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {getTranslation(language, 'contact.title')}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
              >
                <FaMapMarkerAlt className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    {getTranslation(language, 'contact.address')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {getTranslation(language, 'contact.addressText')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
              >
                <FaPhone className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    {getTranslation(language, 'contact.phone')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">+91-172-2590290, 2590291</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
              >
                <FaEnvelope className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    {getTranslation(language, 'contact.email')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">info@sietpanchkula.ac.in</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
              >
                <FaGlobe className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                    {getTranslation(language, 'contact.website')}
                  </h3>
                  <a
                    href="https://sietpanchkula.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    www.sietpanchkula.ac.in
                  </a>
                </div>
              </motion.div>

              {/* Google Maps */}
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="SIET Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.844556731907!2d76.85398331513!3d30.700921895397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906b6b7c5f%3A0x3e5a0e0e5e0e5e0e!2sSector%2028%2C%20Panchkula!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {getTranslation(language, 'contact.getInTouch')}
              </h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! (Demo)'); }}>
                <input
                  type="text"
                  placeholder={getTranslation(language, 'contact.nameLabel')}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                />
                <input
                  type="email"
                  placeholder={getTranslation(language, 'contact.emailLabel')}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                />
                <input
                  type="tel"
                  placeholder={getTranslation(language, 'contact.phoneLabel')}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                />
                <textarea
                  placeholder={getTranslation(language, 'contact.messageLabel')}
                  rows="5"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none transition-all"
                ></textarea>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-colors"
                >
                  {getTranslation(language, 'contact.sendBtn')}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">{getTranslation(language, 'instituteNameShort')}</h3>
              <p className="opacity-90 mb-2">{getTranslation(language, 'instituteName')}</p>
              <p className="opacity-80">{getTranslation(language, 'footer.tagline')}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">{getTranslation(language, 'footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {['home', 'about', 'programs', 'facilities'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} className="opacity-80 hover:opacity-100 transition-opacity">
                      {getTranslation(language, `nav.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">{getTranslation(language, 'footer.contactTitle')}</h4>
              <p className="opacity-80 text-sm leading-relaxed">
                Sector 28, Panchkula<br />
                Haryana - 134108<br />
                Phone: +91-172-2590290<br />
                Email: info@sietpanchkula.ac.in
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center opacity-80">
            <p>{getTranslation(language, 'footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <Suspense fallback={null}>
        <Chatbot />
        <AccessibilityPanel />
      </Suspense>
    </div>
  );
}

// Main App wrapper with providers
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
