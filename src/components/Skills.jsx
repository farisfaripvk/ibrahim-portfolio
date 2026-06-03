// src/components/Skills.jsx
import React from "react";
import {
  Code2,
  Library,
  Database,
  Wrench,
  Server,
  Plug,
  Briefcase,
  Languages,
} from "lucide-react";
import { skillsData } from "../data/skillsData";
import "../styles/SkillsStyle.css"; // Import the CSS file

const Skills = () => {
  // Icon mapping for categories
  const categoryIcons = {
    "Programming Languages": <Code2 size={24} />,
    "Frameworks & Libraries": <Library size={24} />,
    Databases: <Database size={24} />,
    "Tools & Platforms": <Wrench size={24} />,
    "DevOps & Tooling": <Server size={24} />,
    "Integrations & APIs": <Plug size={24} />,
    "ERP & Enterprise Tech": <Briefcase size={24} />,
    Languages: <Languages size={24} />,
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container-custom">
        <div className="skills-header">
          <h2 className="section-title">
            A toolbox built across eight years of enterprise delivery.
          </h2>
          <p className="section-subtitle skills-subtitle">
            From PHP & Laravel monoliths to React frontends, OData services and
            SAP IDocs — I pick the right tool for the job and integrate it
            cleanly.
          </p>
        </div>

        <div className="skills-content">
          {/* Programming Languages */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["Programming Languages"]}
              </div>
              <h3 className="skills-category-title">Programming Languages</h3>
            </div>
            <div className="skills-grid skills-grid-6">
              {skillsData.programmingLanguages.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-level">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["Frameworks & Libraries"]}
              </div>
              <h3 className="skills-category-title">Frameworks & Libraries</h3>
            </div>
            <div className="skills-grid skills-grid-6">
              {skillsData.frameworksLibraries.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-level">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["Databases"]}
              </div>
              <h3 className="skills-category-title">Databases</h3>
            </div>
            <div className="skills-grid skills-grid-4">
              {skillsData.databases.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-level">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["Tools & Platforms"]}
              </div>
              <h3 className="skills-category-title">Tools & Platforms</h3>
            </div>
            <div className="skills-grid skills-grid-6">
              {skillsData.toolsPlatforms.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-level">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tooling */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["DevOps & Tooling"]}
              </div>
              <h3 className="skills-category-title">DevOps & Tooling</h3>
            </div>
            <div className="tags-container">
              {skillsData.devopsTools.map((tool) => (
                <span key={tool} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Integrations & APIs */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["Integrations & APIs"]}
              </div>
              <h3 className="skills-category-title">Integrations & APIs</h3>
            </div>
            <div className="tags-container">
              {skillsData.integrationsAPIs.map((api) => (
                <span key={api} className="skill-tag">
                  {api}
                </span>
              ))}
            </div>
          </div>

          {/* ERP & Enterprise Tech */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["ERP & Enterprise Tech"]}
              </div>
              <h3 className="skills-category-title">ERP & Enterprise Tech</h3>
            </div>
            <div className="tags-container">
              {skillsData.erpEnterprise.map((tech) => (
                <span key={tech} className="skill-tag skill-tag-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skills-category">
            <div className="skills-category-header">
              <div className="skills-category-icon">
                {categoryIcons["Languages"]}
              </div>
              <h3 className="skills-category-title">Languages</h3>
            </div>
            <div className="languages-container">
              {skillsData.languages.map((lang) => (
                <div key={lang.name} className="language-card">
                  <div className="language-icon">{lang.icon}</div>
                  <div className="language-info">
                    <div className="language-name">{lang.name}</div>
                    <div className="language-level">{lang.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
