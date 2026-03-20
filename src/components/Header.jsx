import instituteLogo from '../assets/siet.webp';
import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function Header({ isMenuOpen, onToggleMenu }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-section">
          <img src={instituteLogo} alt="SIET Logo" className="logo" />
          <div className="institute-name">
            <h1 className="name-english">
              State Institute of Engineering & Technology
            </h1>
            <h2 className="name-hindi">
              राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान
            </h2>
            <p className="tagline">{getTranslation(language, 'tagline')}</p>
          </div>
        </div>
        <button className="lang-switch" onClick={toggleLanguage}>
          {language === 'en' ? 'हिन्दी' : 'English'}
        </button>
        <button
          className="menu-toggle"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
