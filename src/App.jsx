import { useState, lazy, Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import FacilitiesSection from './components/FacilitiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const AccessibilityPanel = lazy(() => import('./components/AccessibilityPanel'));
const NoticeBoard = lazy(() => import('./components/NoticeBoard'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Stats = lazy(() => import('./components/Stats'));
const Gallery = lazy(() => import('./components/Gallery'));
const SearchBar = lazy(() => import('./components/SearchBar'));

const LoadingFallback = () => (
  <div className="container" style={{ padding: '1rem 0' }}>
    Loading...
  </div>
);

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <Navigation isMenuOpen={isMenuOpen} onCloseMenu={closeMenu} />
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <SearchBar />
      </Suspense>
      <AboutSection />
      <Suspense fallback={<LoadingFallback />}>
        <Stats />
      </Suspense>
      <ProgramsSection />
      <FacilitiesSection />
      <section id="notices">
        <Suspense fallback={<LoadingFallback />}>
          <NoticeBoard />
        </Suspense>
      </section>
      <section id="dashboard">
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard />
        </Suspense>
      </section>
      <section id="gallery">
        <Suspense fallback={<LoadingFallback />}>
          <Gallery />
        </Suspense>
      </section>
      <ContactSection />
      <Footer />
      <Suspense fallback={null}>
        <AccessibilityPanel />
      </Suspense>
      <Chatbot />
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
