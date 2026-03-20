function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SIET Panchkula</h3>
            <p className="footer-hindi">राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, पंचकुला</p>
            <p>Excellence in Engineering Education</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#programs">Programs</a>
              </li>
              <li>
                <a href="#facilities">Facilities</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Sector 26, Panchkula</p>
            <p>Haryana - 134108</p>
            <p>Phone: +91-123-456789</p>
            <p>Email: info@sietpanchkula.ac.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 SIET Panchkula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
