function Navigation({ isMenuOpen, onCloseMenu }) {
  return (
    <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={onCloseMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={onCloseMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#programs" onClick={onCloseMenu}>
              Programs
            </a>
          </li>
          <li>
            <a href="#facilities" onClick={onCloseMenu}>
              Facilities
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onCloseMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
