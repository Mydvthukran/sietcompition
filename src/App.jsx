import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <div className="logo-section">
            <img
              src="/siet-logo.png"
              alt="SIET Logo"
              className="logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="institute-name">
              <h1 className="name-english">
                Shaheed Ishwar Singh Institute of Engineering & Technology
              </h1>
              <h2 className="name-hindi">
                शहीद ईश्वर सिंह इंजीनियरिंग एंड टेक्नोलॉजी संस्थान
              </h2>
              <p className="tagline">Panchkula, Haryana</p>
            </div>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a></li>
            <li><a href="#facilities" onClick={() => setIsMenuOpen(false)}>Facilities</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h2 className="hero-title">Welcome to SIET Panchkula</h2>
            <p className="hero-subtitle">
              Excellence in Engineering Education Since 2008
            </p>
            <p className="hero-description">
              Affiliated to Kurukshetra University | Approved by AICTE
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#programs" className="btn btn-secondary">Our Programs</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About SIET</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Shaheed Ishwar Singh Institute of Engineering & Technology (SIET) is a premier
                engineering institution located in Panchkula, Haryana. Established in 2008,
                we are committed to providing quality technical education and fostering innovation.
              </p>
              <p>
                Our institute is affiliated with Kurukshetra University and approved by AICTE
                (All India Council for Technical Education). We offer undergraduate programs in
                various engineering disciplines with state-of-the-art facilities and experienced faculty.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <h3>15+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="highlight-item">
                  <h3>50+</h3>
                  <p>Experienced Faculty</p>
                </div>
                <div className="highlight-item">
                  <h3>1000+</h3>
                  <p>Alumni Network</p>
                </div>
                <div className="highlight-item">
                  <h3>100%</h3>
                  <p>Placement Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            We offer B.Tech programs in various engineering disciplines
          </p>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">💻</div>
              <h3>Computer Science & Engineering</h3>
              <p>Focus on software development, AI, and data science</p>
            </div>
            <div className="program-card">
              <div className="program-icon">⚡</div>
              <h3>Electronics & Communication</h3>
              <p>Specializing in VLSI, embedded systems, and telecommunications</p>
            </div>
            <div className="program-card">
              <div className="program-icon">⚙️</div>
              <h3>Mechanical Engineering</h3>
              <p>Covering design, manufacturing, and thermal systems</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🔌</div>
              <h3>Electrical Engineering</h3>
              <p>Power systems, control systems, and renewable energy</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🏗️</div>
              <h3>Civil Engineering</h3>
              <p>Infrastructure development and construction management</p>
            </div>
            <div className="program-card">
              <div className="program-icon">📡</div>
              <h3>Information Technology</h3>
              <p>Web technologies, cloud computing, and cybersecurity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="facilities">
        <div className="container">
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <h3>🔬 Advanced Laboratories</h3>
              <p>
                State-of-the-art labs equipped with modern instruments and software
                for practical learning and research.
              </p>
            </div>
            <div className="facility-card">
              <h3>📚 Rich Library</h3>
              <p>
                Extensive collection of books, journals, and digital resources
                to support academic excellence.
              </p>
            </div>
            <div className="facility-card">
              <h3>🏋️ Sports Complex</h3>
              <p>
                Indoor and outdoor sports facilities promoting physical fitness
                and overall personality development.
              </p>
            </div>
            <div className="facility-card">
              <h3>🏠 Hostel Accommodation</h3>
              <p>
                Separate hostel facilities for boys and girls with all modern
                amenities in a secure environment.
              </p>
            </div>
            <div className="facility-card">
              <h3>🚌 Transportation</h3>
              <p>
                Well-maintained bus fleet covering various routes for safe and
                convenient commute.
              </p>
            </div>
            <div className="facility-card">
              <h3>💼 Placement Cell</h3>
              <p>
                Dedicated placement cell ensuring career guidance and opportunities
                with top companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>
                  Shaheed Ishwar Singh Institute of Engineering & Technology<br />
                  Sector 28, Panchkula, Haryana - 134108
                </p>
              </div>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+91-172-2590290, 2590291</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@sietpanchkula.ac.in</p>
              </div>
              <div className="contact-item">
                <h3>🌐 Website</h3>
                <p>
                  <a href="https://sietpanchkula.ac.in" target="_blank" rel="noopener noreferrer">
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
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SIET Panchkula</h3>
              <p className="footer-hindi">
                शहीद ईश्वर सिंह इंजीनियरिंग एंड टेक्नोलॉजी संस्थान
              </p>
              <p>Excellence in Engineering Education</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#facilities">Facilities</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Sector 28, Panchkula</p>
              <p>Haryana - 134108</p>
              <p>Phone: +91-172-2590290</p>
              <p>Email: info@sietpanchkula.ac.in</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 SIET Panchkula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
