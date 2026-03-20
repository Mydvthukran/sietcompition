import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="hero-tagline-strip">Admissions Open 2026 | Future-Ready Engineering</p>
          <h2 className="hero-title">{getTranslation(language, 'hero.welcome')}</h2>
          <p className="hero-subtitle">{getTranslation(language, 'hero.subtitle')}</p>
          <p className="hero-description">
            {getTranslation(language, 'hero.description')}
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              {getTranslation(language, 'hero.learnMore')}
            </a>
            <a href="#programs" className="btn btn-secondary">
              {getTranslation(language, 'hero.ourPrograms')}
            </a>
          </div>
          <div className="hero-kpis">
            <div className="hero-kpi">
              <span className="kpi-value">3+</span>
              <span className="kpi-label">Years Legacy</span>
            </div>
            <div className="hero-kpi">
              <span className="kpi-value">Top</span>
              <span className="kpi-label">Govt. Institute</span>
            </div>
            <div className="hero-kpi">
              <span className="kpi-value">100%</span>
              <span className="kpi-label">Mentorship Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
