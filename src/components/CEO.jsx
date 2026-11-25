import React, { useState } from "react";
import "./CEO.css";
import ceoPortrait from "../assets/owners.jpeg";

const CEO = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="ceo-section" id="leadership">
      <div className="ceo-container" data-aos="fade-up">
        <div className="ceo-header">
          <h2 className="ceo-title">Meet Our Leadership</h2>
          <span className="ceo-subtitle">Visionary guidance for the AI age</span>
        </div>

        <div className="ceo-full-wrapper">
          <div className="ceo-image-wrapper">
            <img src={ceoPortrait} alt="Jappreet Sethi" className="ceo-image" />
            <div className="ceo-image-caption">
              <h3>Jappreet Sethi</h3>
              <p>Founder and CEO, HexGn</p>
            </div>
          </div>

          <div className="ceo-text-wrapper">
            <div className="ceo-text-top">
              <div className="ceo-text-lead">
                Jappreet Sethi is a consultant and advisor who helps institutions, governments, and enterprises prepare their people for the AI age.
              </div>
              
              <p>
                As Founder and CEO of HexGn, he works with universities, public bodies, and growth-stage companies to future-proof the next generation — building the skills, mindsets, and entrepreneurial capacity needed as work is reshaped by AI, and helping people move into sunrise industries or launch ventures of their own.
              </p>

              <p>
                His advisory work spans more than 15 countries. HexGn has trained 5,000+ entrepreneurs across 20+ markets and partnered with leading universities such as Chulalongkorn and Trisakti, as well as the Governments of Thailand, Bahrain, and others, to build entrepreneurship and workforce-readiness ecosystems. Participants and clients he has advised have collectively raised over $100 million in investment.
                {!isExpanded && (
                  <span className="read-more-link" onClick={() => setIsExpanded(true)}>
                    {" "}Read More
                  </span>
                )}
              </p>
            </div>

            <div className={`ceo-text-expanded ${isExpanded ? 'visible' : ''}`}>
              <p>
                Jappreet brings two decades of consulting and human-capital leadership to this mandate. He was Director of HR for CBRE South Asia and head of People & Process Consulting at JLL India, where he also served on the firm's global Diversity Board, shaping policy across 40+ countries. This grounding lets him advise leaders not just on strategy, but on the organizational and human dynamics that determine whether transformation actually lands.
              </p>
              
              <p>
                His counsel is backed by deep diagnostic credentials — certified assessor for MBTI, FIRO-B, CPI 260, and Saville Wave — alongside Six Sigma Black Belt and Master Lean Practitioner certifications, having led process-improvement mandates generating $10M+ in savings. He has personally guided the leadership development of 250+ senior leaders.
              </p>
              
              <div className="ceo-highlight">
                A visiting faculty member at top institutes and a sought-after voice on the future of work, Jappreet is the founder and lead editor of <a href="https://humanresourcesblog.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)", textDecoration: "none", fontWeight: "700" }}>humanresourcesblog.in</a>.
              </div>

              {isExpanded && (
                <span 
                  className="read-more-link read-less"
                  onClick={() => setIsExpanded(false)}
                >
                  {" "}Read Less
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
