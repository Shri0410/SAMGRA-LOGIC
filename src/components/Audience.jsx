import React from "react";

const Audience = () => {
  const audiences = [
    {
      title: "Marketing Directors & CMOs",
      expectations: [
        "Growth marketing strategies that deliver measurable ROI",
        "Integrated digital marketing campaigns",
        "Content marketing that drives engagement and conversions",
        "Data-driven performance optimization",
        "Brand storytelling and narrative development",
      ],
    },
    {
      title: "Sustainability & ESG Leaders",
      expectations: [
        "ESG communication strategies that build credibility",
        "Sustainability marketing and reporting",
        "Stakeholder engagement through public relations",
        "Green marketing and eco-branding",
        "Impact measurement and communication",
      ],
    },
    {
      title: "Digital Marketing Teams",
      expectations: [
        "Growth-focused digital marketing strategies",
        "Content marketing frameworks and execution",
        "SEO and SEM optimization",
        "Social media and email marketing campaigns",
        "Marketing automation and CRM integration",
      ],
    },
    {
      title: "Public Relations Professionals",
      expectations: [
        "Integrated PR and marketing strategies",
        "Media relations and press coverage",
        "Crisis communication management",
        "Stakeholder communication plans",
        "Brand reputation management",
      ],
    },
    {
      title: "Business Growth Leaders",
      expectations: [
        "Full-funnel growth marketing solutions",
        "Customer acquisition and retention strategies",
        "Market expansion through digital channels",
        "Brand positioning and competitive advantage",
        "Revenue growth and market share expansion",
      ],
    },
    {
      title: "Corporate Communications",
      expectations: [
        "Integrated marketing and communication strategies",
        "ESG and sustainability storytelling",
        "Internal and external communication alignment",
        "Crisis communication preparedness",
        "Stakeholder engagement programs",
      ],
    },
  ];

  return (
    <section className="audience" id="audience">
      <h2 className="audi-title">Our Core Expertise Areas</h2>
      <p className="section-subtitle">
        Specialized solutions for marketing, communication, and sustainability
        professionals
      </p>
      <div className="audience-grid">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="audience-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{audience.title}</h3>
            <ul className="audience-list">
              {audience.expectations.map((expectation, idx) => (
                <li key={idx}>{expectation}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Audience;
