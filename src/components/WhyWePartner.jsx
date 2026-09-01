import React from "react";
import iconInnovation from "../assets/icon_innovation.webp";
import iconGlobal from "../assets/icon_global.webp";
import iconExpertise from "../assets/icon_expertise.webp";
import iconTrust from "../assets/icon_trust.webp";

const WhyWePartner = () => {
  const benefits = [
    {
      icon: iconInnovation,
      title: "Innovation",
      description: "Combining expertise to create cutting-edge solutions",
    },
    {
      icon: iconGlobal,
      title: "Global Reach",
      description: "Expanding impact across diverse markets and communities",
    },
    {
      icon: iconExpertise,
      title: "Expertise",
      description: "Leveraging specialized knowledge for comprehensive solutions",
    },
    {
      icon: iconTrust,
      title: "Trust",
      description: "Building lasting relationships based on mutual success",
    },
  ];

  return (
    <section className="partners why-we-partner-section" id="why-we-partner">
      <div className="geometric-bg"></div>
      <div className="partners-content">
        {/* Partnership Benefits */}
        <div className="partnership-benefits">
          <h3>Why We Partner</h3>
          <p className="section-subtitle" style={{ maxWidth: "600px", margin: "-2.5rem auto 3.5rem" }}>
            Uniting shared values, strategic synergies, and specialized competencies to foster sustainable ecosystem growth.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <img src={benefit.icon} alt={benefit.title} />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWePartner;
