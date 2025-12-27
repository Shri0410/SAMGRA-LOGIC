import React from "react";

const CtaSection = () => {
  return (
    <section className="cta-section" id="cta-section">
      <div className="cta-content">
        <h2 data-aos="fade-up">Ready to Accelerate Your Growth?</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Let's combine <strong>Growth Marketing</strong>,{" "}
          <strong>Digital Strategy</strong>, and{" "}
          <strong>Sustainability Communication</strong>
          to drive meaningful results for your business.
        </p>
        <div
          className="cta-buttons"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a href="#contact" className="cta-button">
            Start Your Growth Journey
          </a>

          <a
            href="mailto:ceo@samgralogic.com"
            className="cta-button cta-button-secondary mail-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="mail-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            ceo@samgralogic.com
          </a>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
