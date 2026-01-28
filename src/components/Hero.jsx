import React from "react";
import heroBg from "../assets/hero_bg.webp";

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          SAMGRA LOGIC
        </h1>
        {/* <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          Integrating Growth Marketing, Digital Strategy & Sustainability
          Communication
        </p> */}
        <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
          We specialize in <strong>Sustainability</strong>,{" "}
          <strong>Advisory Services </strong>,<strong>Market Access </strong>,{" "}
          <strong>Governance</strong>, <strong>Reputation Management </strong>{" "}
          and <strong>Advertising </strong>
          to drive measurable business impact and sustainable brand growth.
        </p>
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
          <a href="#focus" className="cta-button">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
