import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ExternalLink } from "lucide-react";
import "../styles/ProjectsStyle.css"; // Import the CSS file

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "ERP",
    "Integration",
    "Automation",
    "Architecture",
    "E-commerce",
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container-custom">
        <div className="projects-header">
          <h2 className="section-title">
            Selected ERP work — ready for real screenshots.
          </h2>
          <p className="section-subtitle projects-subtitle">
            Image placeholders below are styled visuals — replace each with an
            actual screenshot from the system.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? "filter-btn-active" : "filter-btn-inactive"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-image-content">
                  <div className="project-image-emoji">📸</div>
                  <div className="project-image-text">Project Screenshot</div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <button className="project-link project-link-primary">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="project-link project-link-secondary">
                    <ExternalLink size={16} />
                    Source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          Want to add your real ERP screenshots? Each project image is just a
          placeholder URL inside the datafile. Send me any image URLs (or upload
          screenshots) and I'll wire them in — captions, hover states and all!
        </div>
      </div>
    </section>
  );
};

export default Projects;
