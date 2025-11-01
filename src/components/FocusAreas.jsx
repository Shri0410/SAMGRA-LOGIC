import React from "react";

const FocusAreas = () => {
  const areas = [
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We embed sustainable practices into business strategies, ensuring a balanced approach that delivers environmental responsibility, social progress, and economic growth. Specializing in water conservation, plastic waste management, and sustainable agriculture.",
    },
    {
      icon: "💡",
      title: "Advisory Services",
      description:
        "With deep expertise and advocacy, we simplify the challenges of doing business and empower leaders to make intelligent, forward-looking decisions that drive measurable impact and ROI.",
    },
    {
      icon: "🌍",
      title: "Market Access",
      description:
        "We enable organizations to seamlessly enter and expand across diverse markets, unlocking growth and creating resilient business opportunities through strategic market intelligence.",
    },
    {
      icon: "⚖️",
      title: "Governance",
      description:
        "Ethical, transparent, and accountable practices are at the heart of what we do, helping organizations build trust with stakeholders and society through robust governance frameworks.",
    },
    {
      icon: "🛡️",
      title: "Reputation Management",
      description:
        "We safeguard and enhance brand value by anticipating risks, shaping narratives, and driving strategies that strengthen credibility and stakeholder confidence.",
    },
    {
      icon: "🎯",
      title: "Advertising",
      description:
        "Our creative and impactful campaigns ensure that your value proposition resonates authentically with audiences, leaving a lasting impression and driving business growth.",
    },
  ];

  return (
    <section className="focus-areas" id="focus">
      <div className="geometric-bg"></div>
      <h2 className="section-title" data-aos="fade-up">
        Our Focus Areas
      </h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
        Comprehensive solutions that drive sustainable growth and create lasting
        impact
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
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;
