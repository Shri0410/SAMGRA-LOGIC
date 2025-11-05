import React from "react";

const FocusAreas = () => {
  const areas = [
    {
      icon: "📈",
      title: "Growth Marketing",
      description:
        "Data-driven growth marketing strategies that drive customer acquisition, retention, and revenue growth through integrated digital channels and performance optimization.",
    },
    {
      icon: "📝",
      title: "Content Marketing",
      description:
        "Strategic content marketing that builds brand authority, engages target audiences, and drives conversions through compelling storytelling and value-driven content.",
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions including SEO, SEM, social media marketing, and email marketing to maximize online presence and ROI.",
    },
    {
      icon: "🌱",
      title: "ESG Communication",
      description:
        "Authentic ESG and sustainability communication strategies that build trust, enhance reputation, and demonstrate genuine environmental and social impact.",
    },
    {
      icon: "🗣️",
      title: "Public Relations",
      description:
        "Strategic public relations and media relations that shape narratives, manage reputation, and build meaningful connections with stakeholders and audiences.",
    },
    {
      icon: "🔄",
      title: "Sustainability Marketing",
      description:
        "Integrated sustainability marketing that aligns brand purpose with business objectives, creating authentic connections with conscious consumers.",
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
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;
