import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function FacilitiesSection() {
  const { language } = useLanguage();

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'facilities.title')}</h2>
        <div className="facilities-grid">
          <div className="facility-card">
            <h3>🔬 {getTranslation(language, 'facilities.labs.title')}</h3>
            <p>
              {getTranslation(language, 'facilities.labs.desc')}
            </p>
          </div>
          <div className="facility-card">
            <h3>📚 {getTranslation(language, 'facilities.library.title')}</h3>
            <p>
              {getTranslation(language, 'facilities.library.desc')}
            </p>
          </div>
          <div className="facility-card">
            <h3>🏋️ {getTranslation(language, 'facilities.sports.title')}</h3>
            <p>
              {getTranslation(language, 'facilities.sports.desc')}
            </p>
          </div>
          <div className="facility-card">
            <h3>🏠 {getTranslation(language, 'facilities.hostel.title')}</h3>
            <p>
              {getTranslation(language, 'facilities.hostel.desc')}
            </p>
          </div>
          <div className="facility-card">
            <h3>🚌 {getTranslation(language, 'facilities.transport.title')}</h3>
            <p>
              {getTranslation(language, 'facilities.transport.desc')}
            </p>
          </div>
          <div className="facility-card">
            <h3>💼 {getTranslation(language, 'facilities.placement.title')}</h3>
            <p>
              {getTranslation(language, 'facilities.placement.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
