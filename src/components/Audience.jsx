import React from "react";

const Audience = () => {
  const audiences = [
    {
      title: "C-Suite Executives & Business Leaders",
      expectations: [
        "Strategic solutions aligning with business objectives",
        "Clear evidence of measurable impact and ROI",
        "Confidence in reputation protection and strengthening",
        "Quick understanding of challenge solutions",
        "Case studies and proven expertise",
      ],
    },
    {
      title: "Sustainability, ESG & CSR Leaders",
      expectations: [
        "Expertise in sustainability communication challenges",
        "Experience in environmental projects",
        "Translation of ESG data into compelling narratives",
        "Knowledge of global reporting frameworks",
        "Support in building authentic sustainability stories",
      ],
    },
    {
      title: "Communications & Marketing Leaders",
      expectations: [
        "Trusted strategic partnership",
        "Integrated communication solutions",
        "Crisis management expertise",
        "Creative campaign ideas",
        "Tools and analytics for effectiveness",
      ],
    },
    {
      title: "Governance & Compliance Officers",
      expectations: [
        "Comprehensive CSR and ESG reports",
        "Regulatory communication clarity",
        "Transparent and accountable messaging",
        "Simplified governance structures",
        "Crisis preparedness strategies",
      ],
    },
    {
      title: "Investors & Board Members",
      expectations: [
        "Increased shareholder value assurance",
        "Corporate reputation protection",
        "Strategic insights for governance",
        "Long-term business resilience",
      ],
    },
    {
      title: "Industry Influencers & Media",
      expectations: [
        "Thought-leadership content",
        "Expert commentary with credibility",
        "Media-ready perspectives",
        "Agenda-setting insights",
      ],
    },
  ];

  return (
    <section className="audience" id="audience">
      <h2 className="section-title" data-aos="fade-up">
        Our Primary Audiences
      </h2>
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
