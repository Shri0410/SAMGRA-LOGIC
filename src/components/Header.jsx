import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    closeMenu();

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">SAMGRA LOGIC</div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "nav-links--active" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Mission"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("mission");
              }}
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="#focus"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("focus");
              }}
            >
              Focus Areas
            </a>
          </li>
          <li>
            <a
              href="#audience"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("audience");
              }}
            >
              Our Audience
            </a>
          </li>
          <li>
            <a
              href="#cta-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("cta-section");
              }}
            >
              CtaSection
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Overlay for mobile when menu is open */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={closeMenu}></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
