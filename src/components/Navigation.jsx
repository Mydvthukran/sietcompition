import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function Navigation({ isMenuOpen, onCloseMenu }) {
  const { language } = useLanguage();

  return (
    <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.home')}
            </a>
          </li>
          <li>
            <a href="#about" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.about')}
            </a>
          </li>
          <li>
            <a href="#programs" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.programs')}
            </a>
          </li>
          <li>
            <a href="#facilities" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.facilities')}
            </a>
          </li>
          <li>
            <a href="#notices" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.notices')}
            </a>
          </li>
          <li>
            <a href="#dashboard" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.dashboard')}
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.gallery')}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onCloseMenu}>
              {getTranslation(language, 'nav.contact')}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
