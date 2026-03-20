import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'about.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {getTranslation(language, 'about.description1')}
            </p>
            <p>{getTranslation(language, 'about.description2')}</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h3>15+</h3>
                <p>{getTranslation(language, 'about.yearsLabel')}</p>
              </div>
              <div className="highlight-item">
                <h3>10+</h3>
                <p>{getTranslation(language, 'about.facultyLabel')}</p>
              </div>
              <div className="highlight-item">
                <h3>1000+</h3>
                <p>{getTranslation(language, 'about.alumniLabel')}</p>
              </div>
              <div className="highlight-item">
                <h3>100%</h3>
                <p>{getTranslation(language, 'about.placementLabel')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
