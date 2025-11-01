import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="geometric-bg"></div>
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          SAMGRA LOGIC
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          Uniting Purpose with Performance
        </p>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
          We aspire to be more than just a service provider — we aim to be your
          <strong> trusted partner</strong>, helping you navigate complexity,
          unlock opportunities, and strengthen your reputation in a rapidly
          changing world.
        </p>
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
          <a href="#focus" className="cta-button">
            Explore Our Services
          </a>
          <a href="#contact" className="cta-button cta-button-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
