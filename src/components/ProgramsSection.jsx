import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function ProgramsSection() {
  const { language } = useLanguage();

  return (
    <section id="programs" className="programs">
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'programs.title')}</h2>
        <p className="section-subtitle">
          {getTranslation(language, 'programs.subtitle')}
        </p>
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">💻</div>
            <h3>{getTranslation(language, 'programs.cse.title')}</h3>
            <p>{getTranslation(language, 'programs.cse.desc')}</p>
          </div>
          <div className="program-card">
            <div className="program-icon">⚡</div>
            <h3>{getTranslation(language, 'programs.ece.title')}</h3>
            <p>{getTranslation(language, 'programs.ece.desc')}</p>
          </div>
          <div className="program-card">
            <div className="program-icon">⚙️</div>
            <h3>{getTranslation(language, 'programs.me.title')}</h3>
            <p>{getTranslation(language, 'programs.me.desc')}</p>
          </div>
          <div className="program-card">
            <div className="program-icon">🔌</div>
            <h3>{getTranslation(language, 'programs.ee.title')}</h3>
            <p>{getTranslation(language, 'programs.ee.desc')}</p>
          </div>
          <div className="program-card">
            <div className="program-icon">🏗️</div>
            <h3>{getTranslation(language, 'programs.ce.title')}</h3>
            <p>{getTranslation(language, 'programs.ce.desc')}</p>
          </div>
          <div className="program-card">
            <div className="program-icon">📡</div>
            <h3>{getTranslation(language, 'programs.it.title')}</h3>
            <p>{getTranslation(language, 'programs.it.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
