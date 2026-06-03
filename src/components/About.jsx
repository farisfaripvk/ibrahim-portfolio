// src/components/About.jsx
import React from "react";
import {
  Code2,
  Database,
  Settings,
  Layers,
  Cpu,
  Share2,
  Workflow,
  Trophy,
  Clock,
  Award,
  Users,
  FileText,
} from "lucide-react";
import "../styles/AboutStyle.css";

const About = () => {
  // Main highlights with icons
  const highlights = [
    {
      icon: <Code2 size={32} className="about-icon" />,
      title: "System Development",
      description:
        "Full system development, customisation and module engineering",
    },
    {
      icon: <Share2 size={32} className="about-icon" />,
      title: "ERP Integration",
      description:
        "ERP integration, middleware architecture and API-driven workflows",
    },
    {
      icon: <Database size={32} className="about-icon" />,
      title: "Centralising Systems",
      description: "Centralising ERP and E-commerce websites",
    },
    {
      icon: <Clock size={32} className="about-icon" />,
      title: "Real-time Synchronisation",
      description: "Biometric attendance and real-time data synchronisation",
    },
    {
      icon: <FileText size={32} className="about-icon" />,
      title: "Reporting & Automation",
      description:
        "Reporting, dashboards, document automation and print-ready outputs",
    },
    {
      icon: <Users size={32} className="about-icon" />,
      title: "Client Engagement",
      description:
        "Client engagement, requirement gathering and project leadership",
    },
  ];

  // Modules list for capsule display
  const modules = [
    "HRMS",
    "Finance",
    "Leasing",
    "Procurement",
    "Store / Inventory",
    "Cleaning Management",
    "Project Management",
    "CRM",
    "CAFM",
    "Sales",
    "Recruitment & Training",
    "Performance Evaluation",
    "Ticket Management",
    "POS (Web)",
    "E-commerce Centralisation",
  ];

  return (
    <section id="about" className="about-section">
      <div className="container-custom">
        {/* Header */}
        <div className="about-header">
          <div className="about-badge">ABOUT</div>
          <h2 className="section-title">
            Building enterprise systems that{" "}
            <span className="highlight">work in the real world</span>.
          </h2>
          <p className="section-subtitle about-subtitle">
            Full Stack ERP Developer with 8+ years engineering HR, Finance,
            Procurement, Inventory, Leasing, CRM, CAFM, POS, Project Management,
            Sales, Cleaning, Recruitment & Training and Performance Evaluation
            systems.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="about-grid">
          {highlights.map((item, index) => (
            <div key={index} className="about-card">
              <div className="about-card-icon">{item.icon}</div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Modules Section - Capsule Style */}
        <div className="modules-section">
          <div className="modules-header">
            <Trophy size={28} className="modules-icon" />
            <h3 className="modules-title">MODULES I'VE SHIPPED</h3>
            <span className="modules-count">15+ custom ERP modules</span>
          </div>

          <div className="modules-capsules">
            {modules.map((module, index) => (
              <span key={index} className="module-capsule">
                {module}
              </span>
            ))}
          </div>
        </div>

        {/* End-to-end Workflows Section */}
        <div className="workflows-section">
          <div className="workflow-card">
            <div className="workflow-icon">
              <Workflow size={40} />
            </div>
            <div className="workflow-content">
              <h3 className="workflow-title">End-to-end workflows</h3>
              <p className="workflow-description">
                From biometric attendance and SAP middleware to dashboards and
                print-ready financial outputs.
              </p>
            </div>
          </div>

          <div className="trusted-card">
            <div className="trusted-icon">
              <Award size={40} />
            </div>
            <div className="trusted-content">
              <h3 className="trusted-title">Trusted by clients</h3>
              <p className="trusted-description">
                Requirement analysis, demos, project leadership and
                post-delivery support — every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
