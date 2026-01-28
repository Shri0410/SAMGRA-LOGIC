import React from "react";
import missionSide from "../assets/mission_side.webp";

const Mission = () => {
  return (
    <section className="mission" id="mission">
      <div className="geometric-bg"></div>
      <div className="mission-content">
        <h2 data-aos="fade-up">
          Driving Growth with combining purpose with perfomance
        </h2>

        <div className="mission-intro-grid">
          <div className="mission-text">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#666",
              }}
            >
              At <strong>SAMGRA LOGIC</strong>, we believe that businesses thrive
              when they combine purpose with performance. Our name reflects a
              holistic approach — one that unites sustainability, strategy,
              governance, and creativity to build long-term value for businesses,
              communities, and society.
            </p>
          </div>
          <div className="mission-image" data-aos="fade-left" data-aos-delay="300">
            <img src={missionSide} alt="Strategic Growth" style={{ width: "100%", borderRadius: "20px", boxShadow: "var(--shadow-soft)" }} />
          </div>
        </div>

        <div className="mission-stats">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-number">Sustainability</div>
            <div className="stat-label">
              We embed sustainable practices into business strategies.
            </div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-number">Advisory Services</div>
            <div className="stat-label">
              With deep expertise and advocacy, we simplify the challenges of
              doing business and empower leaders to make intelligent,
              forward-looking decisions.
            </div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-number">Market Access</div>
            <div className="stat-label">
              We enable organizations to seamlessly enter and expand across
              diverse markets.
            </div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">Governance</div>
            <div className="stat-label">
              Ethical, transparent, and accountable practices are at the heart
              of what we do.
            </div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">Reputation Management</div>
            <div className="stat-label">
              We safeguard and enhance brand value by anticipating risks,
              shaping narratives, and driving strategies that strengthen
              credibility.
            </div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">Advertising</div>
            <div className="stat-label">
              Our creative and impactful campaigns ensure that your value
              proposition resonates authentically with audiences, leaving a
              lasting impression.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
