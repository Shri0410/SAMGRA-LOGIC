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
              Integrating Growth Marketing, Digital Strategy & Sustainability
              Communication
            </p>
            <div className="footer-services">
              <span>Core Services:</span>
              <div className="service-tags">
                <span>Growth Marketing</span>
                <span>Content Marketing</span>
                <span>Digital Marketing</span>
                <span>Public Relations</span>
                <span>ESG Communication</span>
                <span>Sustainability Marketing</span>
              </div>
            </div>
          </div>

          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <div className="footer-column">
              <h4>Marketing Services</h4>
              <ul>
                <li>
                  <a href="#">Growth Marketing</a>
                </li>
                <li>
                  <a href="#">Content Marketing</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Public Relations</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Sustainability</h4>
              <ul>
                <li>
                  <a href="#">ESG Communication</a>
                </li>
                <li>
                  <a href="#">Sustainability Marketing</a>
                </li>
                <li>
                  <a href="#">Impact Reporting</a>
                </li>
                <li>
                  <a href="#">Green Branding</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Marketing Insights</a>
                </li>
                <li>
                  <a href="#">ESG Trends</a>
                </li>
                <li>
                  <a href="#">Growth Strategies</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="footer-cta" data-aos="fade-up" data-aos-delay="200">
          <div className="cta-content">
            <h4>Transform Your Marketing Strategy</h4>
            <p>
              Get expert insights on Growth Marketing, Digital Strategy, and
              Sustainability Communication
            </p>
            <a
              href="http://www.samgralogic.com"
              className="website-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Transformation
            </a>
          </div>
        </div> */}

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
