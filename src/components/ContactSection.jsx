function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>
                State Institute of Engineering & Technology
                <br />
                Sector 26, Panchkula, Haryana - 134108
              </p>
            </div>
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+91-123-2590290, 2590291</p>
            </div>
            <div className="contact-item">
              <h3>✉️ Email</h3>
              <p>info@sietpanchkula.ac.in</p>
            </div>
            <div className="contact-item">
              <h3>🌐 Website</h3>
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
          </div>
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
