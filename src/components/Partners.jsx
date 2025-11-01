import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Y4D Foundation",
      logo: "🏛️",
      description:
        "Youth for Development Foundation - Driving sustainable change through youth empowerment and community development initiatives.",
      focusAreas: [
        "Youth Empowerment",
        "Community Development",
        "Education",
        "Social Impact",
      ],
      link: "https://www.y4d.ngo/home",
      color: "#1a472a",
    },
    {
      name: "ENT Media",
      logo: "🎬",
      description:
        "Entertainment Media Solutions - Creating impactful narratives and digital content that resonates with modern audiences.",
      focusAreas: [
        "Digital Content",
        "Brand Storytelling",
        "Media Production",
        "Creative Strategy",
      ],
      link: "https://entmedia.com", // This will open in new tab
      color: "#d4af37",
    },
  ];

  return (
    <section className="partners" id="partners">
      <div className="geometric-bg"></div>
      <div className="partners-content">
        {/* Section Header */}
        <div className="partners-header" data-aos="fade-up">
          <h2 className="section-title">Strategic Partners</h2>
          <p className="section-subtitle">
            Collaborating with industry leaders to deliver exceptional value and
            drive meaningful impact
          </p>
        </div>

        {/* Partners Grid */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="partner-header">
                <div
                  className="partner-logo"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.logo}
                </div>
                <h3>{partner.name}</h3>
              </div>

              <p className="partner-description">{partner.description}</p>

              <div className="partner-focus">
                <h4>Focus Areas:</h4>
                <div className="focus-tags">
                  {partner.focusAreas.map((area, idx) => (
                    <span key={idx} className="focus-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* This link opens in new tab */}
              <a
                href={partner.link}
                className="partner-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div
          className="partnership-benefits"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3>Why We Partner</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Combining expertise to create cutting-edge solutions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌍</div>
              <h4>Global Reach</h4>
              <p>Expanding impact across diverse markets and communities</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h4>Expertise</h4>
              <p>
                Leveraging specialized knowledge for comprehensive solutions
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h4>Trust</h4>
              <p>Building lasting relationships based on mutual success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
