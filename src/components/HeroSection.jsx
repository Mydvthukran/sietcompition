function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="hero-tagline-strip">Admissions Open 2026 | Future-Ready Engineering</p>
          <h2 className="hero-title">Welcome to SIET Panchkula</h2>
          <p className="hero-subtitle">Excellence in Engineering Education Since 2008</p>
          <p className="hero-description">
            Affiliated to Kurukshetra University | Approved by AICTE
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              Learn More
            </a>
            <a href="#programs" className="btn btn-secondary">
              Our Programs
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
