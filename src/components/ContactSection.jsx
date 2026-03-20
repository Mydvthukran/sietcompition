import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';

function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{getTranslation(language, 'contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 {getTranslation(language, 'contact.address')}</h3>
              <p>
                {getTranslation(language, 'contact.addressText')}
              </p>
            </div>
            <div className="contact-item">
              <h3>📞 {getTranslation(language, 'contact.phone')}</h3>
              <p>
                <a href="tel:+911722590290">+91-172-2590290</a>,{' '}
                <a href="tel:+911722590291">2590291</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>✉️ {getTranslation(language, 'contact.email')}</h3>
              <p><a href="mailto:info@sietpanchkula.ac.in">info@sietpanchkula.ac.in</a></p>
            </div>
            <div className="contact-item">
              <h3>🌐 {getTranslation(language, 'contact.website')}</h3>
              <p>
                <a
                  href="https://sietpanchkula.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.sietpanchkula.ac.in
                </a>
              </p>
            </div>
            <div className="contact-item">
              <iframe
                title="SIET Panchkula Map"
                src="https://www.google.com/maps?q=Sector%2028%20Panchkula&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contact-form">
            <h3>{getTranslation(language, 'contact.getInTouch')}</h3>
            <form>
              <input type="text" placeholder={getTranslation(language, 'contact.nameLabel')} required />
              <input type="email" placeholder={getTranslation(language, 'contact.emailLabel')} required />
              <input type="tel" placeholder={getTranslation(language, 'contact.phoneLabel')} />
              <textarea placeholder={getTranslation(language, 'contact.messageLabel')} rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                {getTranslation(language, 'contact.sendBtn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
