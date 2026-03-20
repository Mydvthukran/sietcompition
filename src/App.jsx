import { useState } from 'react';
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
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
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
