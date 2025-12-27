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

        {/* Navigation Links - Updated for new content */}
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
              href="#mission"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("mission");
              }}
            >
              Our Approach
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
              Sustainability
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
              Stakeholders
            </a>
          </li>
          <li>
            <a
              href="#partners"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("partners");
              }}
            >
              Partners
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
              Get Started
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
