import React, { useState } from "react";
import "./BoardOfAdvisors.css";
import drPhoto from "../assets/dr.jpeg";
import sudhirPhoto from "../assets/sudhir .jpeg";
import jagdishPhoto from "../assets/advisiors.jpeg";

const advisors = [
  {
    id: "rajeev-ranjan",
    name: "Dr. Rajeev Ranjan, IAS (Retd.)",
    role: "Member, Board of Advisors",
    credentials:
      "Former Chief Secretary, Government of Tamil Nadu | Former Secretary, Government of India",
    lead: "Dr. Rajeev Ranjan is a 1985-batch Indian Administrative Service officer with over 36 years of public service. He is among the few to have served at the highest levels of both the Union and a State government, as Secretary to the Government of India and as Chief Secretary of Tamil Nadu.",
    paragraphs: [
      "As Special Secretary to the GST Council and a Director of GSTN, he oversaw the development of India's GST system and the introduction of e-invoicing. As Secretary, Fisheries, he was instrumental in designing and launching the \u20b920,050 crore Pradhan Mantri Matsya Sampada Yojana. In Tamil Nadu, he led departments including Industries, Finance, Energy, and Highways and Ports.",
      "He has served on 77 boards as Chairman, Managing Director or Director, including Titan Company, TIDCO, TNPL, TIDEL Park, NLC, Chennai Metro Rail and the IIT Madras Research Park. He currently serves on the board of NABARD Consultancy Services and is an honorary Senior Adviser to the National Cooperative Development Corporation.",
    ],
    highlight:
      "Dr. Ranjan holds an MBA from IIM Ahmedabad, a postgraduate degree in Public Policy from the London School of Economics, and a Ph.D. in Management Sciences (Intellectual Property Rights) from Anna University.",
    initials: "RR",
    photo: drPhoto,
  },
  {
    id: "sudhir-kumar",
    name: "Sudhir Kumar",
    role: "Member, Board of Advisors",
    credentials:
      "Former Director, Ministry of Agriculture & Farmers Welfare, Government of India",
    lead: "Sudhir Kumar brings over 35 years of experience in the Government of India, where he served in the Central Secretariat Service from 1987 until his retirement in June 2023 as Director in the Agriculture Policy Division, Department of Agriculture & Farmers Welfare.",
    paragraphs: [
      "His career spans policy, legislation and regulation across several ministries. In agriculture, he worked in the Farmers Welfare Division during the launch of the PM-KISAN scheme and in the Plant Protection Division on pesticide regulation and agricultural trade. In 2021\u201322 he was part of the team that set up the new Ministry of Cooperation.",
      "Earlier, he spent seven years in the Ministry of Health & Family Welfare on drugs and food quality control and medical education. Before that, he spent twelve years in the Legislative Department on election laws, electoral reforms, delimitation and the introduction of electronic voting machines.",
    ],
    highlight:
      "He holds a B.Sc. (Hons) in Chemistry from Bihar University.",
    initials: "SK",
    photo: sudhirPhoto,
  },
  {
    id: "jagdish-prasad-meena",
    name: "Jagdish Prasad Meena, IAS (Retd.)",
    role: "Member, Board of Advisors",
    credentials:
      "Former Secretary, Ministry of Food Processing Industries, Government of India",
    lead: "Jagdish Prasad Meena is a retired IAS officer with more than 30 years in public service. He retired in 2018 as Secretary to the Government of India, Ministry of Food Processing Industries.",
    paragraphs: [
      "There he led national programmes such as Mega Food Parks and the Integrated Cold Chain scheme, and drafted the National Food Processing Policy. He has also served as Secretary of Consumer Affairs, Joint Secretary at the Ministry of Agriculture and the National Human Rights Commission, and in senior roles with the Government of Assam.",
      "He was former Secretary General of the Indian Beverage Association and a Senior Adviser to the National Cooperative Development Corporation. He holds an MA from the University of Reading (UK) and has completed leadership programmes at Harvard, Cambridge and Cornell.",
    ],
    highlight:
      "Expertise: Public policy \u00b7 Food processing and agribusiness \u00b7 Agriculture and cooperatives \u00b7 Regulation and governance",
    initials: "JM",
    photo: jagdishPhoto,
  },
];

const AdvisorCard = ({ advisor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="advisor-card" data-aos="fade-up">
      {/* Avatar / Photo */}
      <div className="advisor-avatar-wrap">
        {advisor.photo ? (
          <div className="advisor-photo-wrap">
            <img
              src={advisor.photo}
              alt={advisor.name}
              className="advisor-photo"
            />
          </div>
        ) : (
          <div className="advisor-avatar">
            <span>{advisor.initials}</span>
          </div>
        )}
        <div className="advisor-avatar-caption">
          <h3>{advisor.name}</h3>
          <p className="advisor-role">{advisor.role}</p>
          <p className="advisor-credentials">{advisor.credentials}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="advisor-bio">
        <div className="advisor-lead">{advisor.lead}</div>

        <div className={`advisor-expanded ${isExpanded ? "visible" : ""}`}>
          {advisor.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="advisor-highlight">{advisor.highlight}</div>
          <span
            className="advisor-toggle"
            onClick={() => setIsExpanded(false)}
          >
            Read Less
          </span>
        </div>

        {!isExpanded && (
          <span
            className="advisor-toggle"
            onClick={() => setIsExpanded(true)}
          >
            Read More
          </span>
        )}
      </div>
    </div>
  );
};

const BoardOfAdvisors = () => {
  return (
    <section className="boa-section" id="advisors">
      <div className="boa-container">
        <div className="boa-header" data-aos="fade-up">
          <h2 className="boa-title">Board of Advisors</h2>
          <span className="boa-subtitle">
            Distinguished leaders shaping our strategic direction
          </span>
        </div>

        <div className="boa-grid">
          {advisors.map((advisor) => (
            <AdvisorCard key={advisor.id} advisor={advisor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfAdvisors;

