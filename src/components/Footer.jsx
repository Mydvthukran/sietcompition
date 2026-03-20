import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{getTranslation(language, 'instituteNameShort')}</h3>
            <p className="footer-hindi">{getTranslation(language, 'instituteName')}</p>
            <p>{getTranslation(language, 'footer.tagline')}</p>
          </div>
          <div className="footer-section">
            <h4>{getTranslation(language, 'footer.quickLinks')}</h4>
            <ul>
              <li>
                <a href="#home">{getTranslation(language, 'nav.home')}</a>
              </li>
              <li>
                <a href="#about">{getTranslation(language, 'nav.about')}</a>
              </li>
              <li>
                <a href="#programs">{getTranslation(language, 'nav.programs')}</a>
              </li>
              <li>
                <a href="#facilities">{getTranslation(language, 'nav.facilities')}</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{getTranslation(language, 'footer.contactTitle')}</h4>
            <p>Sector 26, Panchkula</p>
            <p>Haryana - 134108</p>
            <p>Phone: +91-123-456789</p>
            <p>Email: info@sietpanchkula.ac.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{getTranslation(language, 'footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
