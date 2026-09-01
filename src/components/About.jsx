import React from "react";
import leaderImage from "../assets/jappreet.png";

const About = () => {
  return (
    <section className="about-section" id="team">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header" data-aos="fade-up">
          <h2 className="team-main-title">Team</h2>
          <p className="team-sub-badge">VISIONARY GUIDANCE FOR THE AI AGE</p>
        </div>

        {/* Executive Profile Grid */}
        <div className="about-grid">
          {/* Left Column: Leader Portrait */}
          <div className="about-image-col" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img
                src={leaderImage}
                alt="Jappreet Sethi - Founder and CEO, HexGn"
                className="ceo-photo"
              />
              <div className="ceo-badge-floating">
                <div className="ceo-badge-tag">Jappreet Sethi</div>
                <div className="ceo-badge-org">FOUNDER AND CEO, HEXGN</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="about-content-col" data-aos="fade-left">
            {/* Top Highlight Box */}
            <div className="about-quote-box leader-top-box">
              <p className="about-quote-text">
                Jappreet Sethi is a consultant and advisor who helps institutions, governments, and enterprises prepare their people for the AI age.
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="about-bio-text">
              <p>
                As Founder and CEO of HexGn, he works with universities, public bodies, and growth-stage companies to future-proof the next generation — building the skills, mindsets, and entrepreneurial capacity needed as work is reshaped by AI, and helping people move into sunrise industries or launch ventures of their own.
              </p>
              <p>
                His advisory work spans more than 15 countries. HexGn has trained 5,000+ entrepreneurs across 20+ markets and partnered with leading universities such as Chulalongkorn and Trisakti, as well as the Governments of Thailand, Bahrain, and others, to build entrepreneurship and workforce-readiness ecosystems. Participants and clients he has advised have collectively raised over $100 million in investment.
              </p>
              <p>
                Jappreet brings two decades of consulting and human-capital leadership to this mandate. He was Director of HR for CBRE South Asia and head of People & Process Consulting at JLL India, where he also served on the firm's global Diversity Board, shaping policy across 40+ countries. This grounding lets him advise leaders not just on strategy, but on the organizational and human dynamics that determine whether transformation actually lands.
              </p>
              <p>
                His counsel is backed by deep diagnostic credentials — certified assessor for MBTI, FIRO-B, CPI 260, and Saville Wave — alongside Six Sigma Black Belt and Master Lean Practitioner certifications, having led process-improvement mandates generating $10M+ in savings. He has personally guided the leadership development of 250+ senior leaders.
              </p>
            </div>

            {/* Bottom Highlight Callout */}
            <div className="leader-bottom-box">
              <p>
                <em>A visiting faculty member at top institutes and a sought-after voice on the future of work, Jappreet is the founder and lead editor of <strong>humanresourcesblog.in</strong>.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
