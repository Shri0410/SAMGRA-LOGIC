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
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
          <a href="#contact" className="cta-button">
            Start Your Growth Journey
          </a>
          <a href="#contact" className="cta-button cta-button-secondary">
            Book Marketing Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
