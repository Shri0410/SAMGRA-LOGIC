import React from "react";

const CtaSection = () => {
  return (
    <section className="cta-section" id="cta-section">
      <div className="cta-content">
        <h2 data-aos="fade-up">Ready to Transform Your Business?</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Join forward-thinking leaders who trust SAMGRA LOGIC to navigate
          complexity, unlock opportunities, and build lasting value.
        </p>
        <a
          href="#contact"
          className="cta-button"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
