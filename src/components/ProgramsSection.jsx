function ProgramsSection() {
  return (
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
  );
}

export default ProgramsSection;
