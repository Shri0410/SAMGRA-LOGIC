import React from "react";
import audienceHeader from "../assets/audience_abstract.png";

const Audience = () => {
  const audiences = [
    {
      title: "C-Suite Executives & Business Leaders",
      subtitle: "Who they are: CEOs, Managing Directors, Founders of mid-to-large enterprises",
      expectations: [
        "Strategic solutions that directly align with business objectives",
        "Clear evidence of measurable impact and ROI",
        "Confidence in our ability to protect and strengthen their reputation",
        "A quick, precise understanding of how we solve their challenges.",
        "Case studies and thought leadership that demonstrate proven expertise.",
      ],
    },
    {
      title: "Sustainability, ESG & CSR Leaders",
      subtitle: "Who they are: Heads of Sustainability, ESG Managers, CSR Leaders",
      expectations: [
        "Deep expertise in addressing complex sustainability communication challenges",
        "Proven experience in executing impactful environmental projects across water conservation & replenishment, plastic waste management, and sustainable agriculture",
        "Ability to translate technical ESG data into compelling, easy-to-understand narratives",
        "Strong knowledge of global reporting frameworks and evolving stakeholder expectations",
        "Support in building authentic, credible, and transparent sustainability stories",
        "Strategic guidance to avoid greenwashing while showcasing genuine impact",
      ],
    },
    {
      title: "Communications & Marketing Leaders",
      subtitle: "Who they are: Chief Communications Officers, Marketing Directors, Corporate Communications Managers",
      expectations: [
        "A trusted strategic partner who works as an extension of their team",
        "Integrated communication solutions across multiple channels",
        "Crisis management expertise with rapid, reliable response capabilities",
        "Creative campaign ideas rooted in strong strategic insights",
        "Tools and analytics that elevate the effectiveness of communication",
      ],
    },
    {
      title: "Governance & Compliance Officers",
      subtitle: "Who they are: Compliance Heads, Risk Managers",
      expectations: [
        "Comprehensive reports on CSR impact, ESG performance, and market analysis",
        "Clarity on regulatory communication requirements",
        "Expertise in transparent and accountable messaging",
        "Support in simplifying complex governance structures for stakeholders",
        "Crisis preparedness and strategies to safeguard reputation",
      ],
    },
    {
      title: "Investors & Board Members",
      expectations: [
        "Assurance that our partnership will increase shareholder value",
        "Confidence in our ability to protect and enhance corporate reputation",
        "Strategic insights that strengthen governance and long-term business resilience",
      ],
    },
    {
      title: "Industry Influencers & Media",
      expectations: [
        "Thought-leadership content that sets the agenda",
        "Expert commentary backed by credibility and insight",
        "Media-ready perspectives that resonate with broader audiences",
      ],
    },
  ];

  return (
    <section className="audience" id="audience">
      <div className="audience-intro-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto 4rem",
        textAlign: "left"
      }}>
        <div className="audience-text" data-aos="fade-right">
          <h2 className="audi-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>Stakeholders</h2>
          <p className="section-subtitle" style={{ margin: "0", textAlign: "left", maxWidth: "100%" }}>
            At <strong>SAMGRA</strong>, we work with a diverse range of stakeholders who seek strategic clarity, measurable impact, and trusted guidance. Each audience has unique priorities — and we tailor our solutions to meet them with precision.
          </p>
        </div>
        <div className="audience-header-img" data-aos="fade-left">
          <img src={audienceHeader} alt="Stakeholders" style={{ width: "100%", borderRadius: "20px", boxShadow: "var(--shadow-soft)" }} />
        </div>
      </div>
      <div className="audience-grid">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="audience-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{audience.title}</h3>
            <h4>{audience.subtitle}</h4>
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
