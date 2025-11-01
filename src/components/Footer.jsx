import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="geometric-bg"></div>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand" data-aos="fade-up">
            <h3>SAMGRA LOGIC</h3>
            <p className="footer-tagline">
              Uniting purpose with performance for sustainable business growth
            </p>
            <div className="footer-social">
              <span>Follow us:</span>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <a href="#" aria-label="Twitter">
                  Twitter
                </a>
                <a href="#" aria-label="Instagram">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Advisory Services</a>
                </li>
                <li>
                  <a href="#">Market Access</a>
                </li>
                <li>
                  <a href="#">Governance</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Insights</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ letterSpacing: "2px" }}>
            Design and Developed By{" "}
            <a
              href="https://www.syntiaro.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              SYNTIARO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
