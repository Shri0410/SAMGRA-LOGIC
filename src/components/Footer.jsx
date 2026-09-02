import React from "react";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="geometric-bg"></div>

      <div className="footer-content">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3>SAMGRA LOGIC</h3>

            <p
              style={{
                color: "black",
                marginTop: "1rem",
                fontSize: "0.95rem",
                maxWidth: "300px",
                lineHeight: "1.5",
              }}
            >
              Samgra (Samagra Logic) helps drive measurable business impact and
              sustainable brand growth.
            </p>

            <div className="footer-services"></div>
          </div>

          {/* Resources Section */}
          <div className="footer-links">
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

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p style={{ letterSpacing: "2px" }}>
                Design and Developed By{" "}
                <a
                  href="https://www.syntiaro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="syntiaro-link"
                  aria-label="Visit Syntiaro Website"
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