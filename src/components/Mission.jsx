import React from "react";

const Mission = () => {
  return (
    <section className="mission" id="mission">
      <div className="geometric-bg"></div>
      <div className="mission-content">
        <h2 data-aos="fade-up">Driving Growth with combining purpose with perfomance</h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            maxWidth: "930px",
            margin: "0 auto 3rem",
            color: "#666",
          }}
        >
          At <strong>SAMGRA LOGIC</strong>,we believe that businesses thrive when they combine purpose with performance.
          Our name reflects a holistic approach — one that unites sustainability, strategy, governance, and creativity to build long-term value for businesses, communities, and society.
          <br></br>
          We aspire to be more than just a service provider — we aim to be your <strong>trusted partner</strong>, helping you navigate complexity, unlock opportunities, and strengthen your reputation in a rapidly changing world.</p>

        <div className="mission-stats">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-number">Sustainability</div>
            <div className="stat-label">We embed sustainable practices into business strategies, ensuring a balanced approach that delivers environmental responsibility, social progress, and economic growth.</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-number">Advisory Services</div>
            <div className="stat-label">With deep expertise and advocacy, we simplify the challenges of doing business and empower leaders to make intelligent, forward-looking decisions.</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-number">Market Access</div>
            <div className="stat-label">We enable organizations to seamlessly enter and expand across diverse markets, unlocking growth and creating resilient business opportunities.</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">Governance</div>
            <div className="stat-label">Ethical, transparent, and accountable practices are at the heart of what we do, helping organizations build trust with stakeholders and society.</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">Reputation Management</div>
            <div className="stat-label">We safeguard and enhance brand value by anticipating risks, shaping narratives, and driving strategies that strengthen credibility.</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
            <div className="stat-number">Advertising</div>
            <div className="stat-label">Our creative and impactful campaigns ensure that your value proposition resonates authentically with audiences, leaving a lasting impression.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
