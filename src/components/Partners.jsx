import React from "react";
import {
  Dna,
  Microscope,
  TrendingUp,
  Music,
  Clapperboard,
  Sparkles,
  Briefcase,
  Globe,
  Ticket,
  Tv,
} from "lucide-react";
import iconInnovation from "../assets/icon_innovation.webp";
import iconGlobal from "../assets/icon_global.webp";
import iconExpertise from "../assets/icon_expertise.webp";
import iconTrust from "../assets/icon_trust.webp";

const Partners = () => {
  const partners = [
    {
      name: "BioBridge",
      icon: Dna,
      description:
        "BioBridge Healthcare Solutions provides consulting and end-to-end solutions for the pharmaceutical and biotechnology sector, supporting product development, quality, manufacturing, and business growth.",
      focusAreas: [
        "Healthcare Solutions",
        "Pharmaceuticals",
        "Biotechnology",
        "Quality Management",
      ],
      link: "https://biobridge.in/",
      color: "#1976d2",
    },
    {
      name: "Symbiotec",
      icon: Microscope,
      description:
        "Symbiotec is a research-driven pharmaceutical and biotechnology company with global expertise in corticosteroid and steroidal hormone APIs, biotechnology, fermentation, and complex injectables.",
      focusAreas: [
        "Pharmaceutical APIs",
        "Biotechnology",
        "R&D",
        "Manufacturing",
      ],
      link: "https://www.symbiotec.com/about",
      color: "#1565c0",
    },
    {
      name: "FinYes Consulting",
      icon: TrendingUp,
      description:
        "FinYes Consulting is a management consulting firm providing accounting advisory, risk and compliance, and CFO services to help businesses improve financial performance.",
      focusAreas: [
        "Accounting Advisory",
        "Risk & Compliance",
        "CFO Services",
        "Business Consulting",
      ],
      link: "https://finyes.in/",
      color: "#0f766e",
    },
    {
      name: "FMD Music",
      icon: Music,
      description:
        "FMD Music is an independent regional music label focused on music production, artist management, distribution, post-production, and digital promotion across diverse Indian music markets.",
      focusAreas: [
        "Music Production",
        "Artist Management",
        "Music Distribution",
        "Digital Marketing",
      ],
      link: "https://fmdmusic.com/",
      color: "#7c3aed",
    },
    {
      name: "Filmmakers Den",
      icon: Clapperboard,
      description:
        "Filmmakers Den is a creative media platform offering video production, branding, post-production, music videos, films, web series, and creative collaborations.",
      focusAreas: [
        "Video Production",
        "Branding",
        "Post Production",
        "Film & Web Series",
      ],
      link: "https://www.filmmakersden.com/",
      color: "#dc2626",
    },
    {
      name: "Aura Alliance",
      icon: Sparkles,
      description:
        "Aura Alliance & Entertainment works with content creators, celebrities, and brands through content strategy, talent management, brand collaborations, and digital growth solutions.",
      focusAreas: [
        "Creator Management",
        "Brand Collaborations",
        "Digital Growth",
        "Entertainment",
      ],
      link: "https://auraalliance.in/",
      color: "#c026d3",
    },
    {
      name: "CSI BPO",
      icon: Briefcase,
      description:
        "CSI BPO provides professional BPO and KPO services including data processing, data conversion, web research, environmental health and safety compliance, and data mining.",
      focusAreas: [
        "BPO Services",
        "Data Processing",
        "Data Mining",
        "Research Services",
      ],
      link: "https://www.csibpo.com/",
      color: "#2563eb",
    },
    {
      name: "Prime Kynn Group",
      icon: Globe,
      description:
        "Prime Kynn Group delivers strategic business solutions with a focus on strategic thinking, execution, and helping organizations create sustainable growth.",
      focusAreas: [
        "Strategic Consulting",
        "Business Growth",
        "Global Execution",
        "Advisory",
      ],
      link: "https://www.primekynngroup.com/",
      color: "#1e3a8a",
    },
    {
      name: "CircusINC",
      icon: Ticket,
      description:
        "CircusINC is an event management company bringing together strategists, planners, and creators to design and deliver conferences, exhibitions, awards, meetings, and brand experiences.",
      focusAreas: [
        "Event Management",
        "Brand Experiences",
        "Conferences",
        "Exhibitions",
      ],
      link: "https://circusinc.in/",
      color: "#ea580c",
    },
    {
      name: "ENT Media",
      icon: Tv,
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
        <div className="partners-header">
          <h2 className="section-title">Strategic Partners</h2>
          <p className="section-subtitle">
            Collaborating with industry leaders to deliver exceptional value and
            drive meaningful impact
          </p>
        </div>

        {/* Partners Grid */}
        <div className="partners-grid">
          {partners.map((partner, index) => {
            const PartnerIcon = partner.icon;
            return (
              <div
                key={index}
                className="partner-card"
              >
                <div className="partner-header-row">
                  <div
                    className="partner-logo"
                    style={{ backgroundColor: partner.color }}
                  >
                    <PartnerIcon size={32} color="#ffffff" strokeWidth={2.2} />
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
                  Learn More
                </a>
              </div>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <div className="partnership-benefits">
          <h3>Why We Partner</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={iconInnovation} alt="Innovation" />
              </div>
              <h4>Innovation</h4>
              <p>Combining expertise to create cutting-edge solutions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={iconGlobal} alt="Global Reach" />
              </div>
              <h4>Global Reach</h4>
              <p>Expanding impact across diverse markets and communities</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={iconExpertise} alt="Expertise" />
              </div>
              <h4>Expertise</h4>
              <p>
                Leveraging specialized knowledge for comprehensive solutions
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={iconTrust} alt="Trust" />
              </div>
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
