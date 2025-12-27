import React from "react";

const FocusAreas = () => {
  const areas = [
    {
      icon: "📈",
      title: "Sustainability",
      description:
      [
        "ESG statergy & reporting.",
        "Water stewardship & water replenishment",
        "Waste Management & driving circular economy",
        "Supplier sustainability audits",

      ],
    },
    {
      icon: "📝",
      title: "Advisory Services",
      description:
      [
        "Corporate & business strategy",
        "Sales management",
        "Growth and turnaround advisory",
        "Public Policy advisory",
        "Board & leadership advisory",
        "Regulatory strategy",
        "Corporate Social Responsibility strategy",
      ],
    },
    {
      icon: "🎯",
      title: "Market Access",
      description:
      [
        "Market Entry & Expansion Strategy",
        "Regulatory & Policy Access- Factories, Environment etc.",
        "Licensing, approvals & compliance pathways for Pharma, FMCG etc.",
        "Channel & Partner Development",
        "Government & Institutional Access",
        "Pricing, Reimbursement & Commercial Access",
        "Localisation & Market Adaptation",
        "Pilot Launch & Scale-Up Support",
        "Risk, Compliance & Market Readiness",
      ],
    },
    {
      icon: "🌱",
      title: "Governance",
      description:
      [
        "ESG & Sustainability Governance",
        "CSR - execution, audit, impact, and reporting",
      ],
    },
    {
      icon: "🗣️",
      title: "Reputation Management",
      description:
      [
        "Reputation Strategy & Positioning",
        "Media & Public Relations Advisory",
        "Crisis & Issue Management",
        "Digital & Online Reputation Management",
        "Leadership & Executive Reputation",
        "Investor & Stakeholder Communications",
        "Policy, Regulatory & Public Affairs Reputation",
        "Reputation Monitoring & Intelligence",
        "Sustainability communications",    
      ],
    },
    {
      icon: "🔄",
      title: "Advertising",
      description:
      [
        "Advertising Strategy & Planning",
        "Creative & Brand Communication",
        "Digital and Traditional Advertising",
        "Media Planning & Buying",
        "Content & Branded Campaigns",
        "Performance & Growth Advertising",
        "Political, Public Affairs & Advocacy Advertising",
        "Campaign Measurement & Optimization",
      ],
    },
  ];

  return (
    <section className="focus-areas" id="focus">
      <div className="geometric-bg"></div>
      <h2 className="focus-title" data-aos="fade-up">
        Our Marketing & Communication Solutions
      </h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
        Integrated approaches combining growth marketing, digital strategy, and
        sustainability communication
      </p>
      <div className="areas-grid">
  {areas.map((area, index) => (
    <div
      key={index}
      className="area-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="area-icon">{area.icon}</div>
      <h3>{area.title}</h3>

      {/* Bullet points */}
      <ul className="area-points">
        {area.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

    </section>
  );
};

export default FocusAreas;
