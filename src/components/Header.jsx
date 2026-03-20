import instituteLogo from '../assets/siet.webp';
import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function Header({ isMenuOpen, onToggleMenu }) {
  const { language } = useLanguage();

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-section">
          <img src={instituteLogo} alt="SIET Logo" className="logo" />
          <div className="institute-name">
            <h1 className="name-english">
              {getTranslation(language, 'instituteName')}
            </h1>
            <h2 className="name-hindi">
              {language === 'en' ? 'राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान' : 'State Institute of Engineering & Technology'}
            </h2>
            <p className="tagline">{getTranslation(language, 'tagline')}</p>
          </div>
        </div>
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
