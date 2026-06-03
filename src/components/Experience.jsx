import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experienceData } from "../data/experienceData";
import "../styles/ExperienceStyle.css"; // Import the CSS file

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container-custom">
        <div className="experience-header">
          <h2 className="section-title">A timeline of shipping at scale.</h2>
          <p className="section-subtitle experience-subtitle">
            8+ years of delivering enterprise solutions
          </p>
        </div>

        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
            >
              <div className="timeline-card">
                <div className="timeline-dot"></div>

                <div className="timeline-period">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>

                <h3 className="timeline-title">{exp.title}</h3>

                <div className="timeline-company">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>

                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="timeline-achievement">
                      <span className="timeline-bullet">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
