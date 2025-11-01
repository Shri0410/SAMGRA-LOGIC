import React from "react";

const Mission = () => {
  return (
    <section className="mission" id="mission">
      <div className="geometric-bg"></div>
      <div className="mission-content">
        <h2 data-aos="fade-up">Our Purpose & Vision</h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 3rem",
            color: "#666",
          }}
        >
          At <strong>SAMGRA LOGIC</strong>, we believe that businesses thrive
          when they combine purpose with performance. Our name reflects a
          holistic approach — one that unites sustainability, strategy,
          governance, and creativity to build long-term value for businesses,
          communities, and society.
        </p>

        <div className="mission-stats">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-number">100+</div>
            <div className="stat-label">Successful Projects</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-number">50+</div>
            <div className="stat-label">Trusted Clients</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Strategic Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
