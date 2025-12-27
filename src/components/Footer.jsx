import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="geometric-bg"></div>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand" data-aos="fade-up">
            <h3>SAMGRA LOGIC</h3>
            <div className="footer-services">
            </div>
          </div>
          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Insights</a>
                </li>
                <li>
                  <a href="#">Trends</a>
                </li>
                <li>
                  <a href="#">Strategies</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
