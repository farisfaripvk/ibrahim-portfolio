import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { educationData, certifications } from "../data/educationData";
import "../styles/EducationStyle.css"; // Import the CSS file

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container-custom">
        <div className="education-header">
          <h2 className="section-title">
            Academic foundation in Computer Applications.
          </h2>
          <p className="section-subtitle education-subtitle">
            Building on strong educational background
          </p>
        </div>

        <div className="education-grid">
          {/* Education */}
          <div>
            <h3 className="education-section-title">
              <GraduationCap size={28} className="education-icon" />
              Education
            </h3>

            <div className="education-list">
              {educationData.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-card-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className="education-percentage">
                      {edu.percentage}
                    </span>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-period">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="education-section-title">
              <Award size={28} className="education-icon" />
              Certifications
            </h3>

            <div className="certifications-card">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="certification-dot"></div>
                  <span className="certification-text">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="education-footer">
          <p className="education-footer-text">
            Open to interview rounds, freelance and full-time roles.
          </p>
          <p className="education-footer-highlight">
            ✓ I'm an immediate joiner through
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
