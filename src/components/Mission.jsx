import React from "react";

const Mission = () => {
  return (
    <section className="mission" id="mission">
      <div className="geometric-bg"></div>
      <div className="mission-content">
        <h2 data-aos="fade-up">Driving Growth Through Integrated Marketing</h2>
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
          At <strong>SAMGRA LOGIC</strong>, we bridge the gap between{" "}
          <strong>Growth Marketing</strong>, <strong>Digital Marketing</strong>,
          and <strong>Sustainability Communication</strong>. Our integrated
          approach combines data-driven marketing strategies with authentic{" "}
          <strong>ESG communication</strong> and strategic{" "}
          <strong>Public Relations</strong> to create comprehensive solutions
          that drive both business growth and positive social impact.
        </p>

        <div className="mission-stats">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-number">200%+</div>
            <div className="stat-label">Average Growth for Clients</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-number">50+</div>
            <div className="stat-label">Content Marketing Campaigns</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-number">15+</div>
            <div className="stat-label">ESG Communication Projects</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">95%</div>
            <div className="stat-label">Client Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
