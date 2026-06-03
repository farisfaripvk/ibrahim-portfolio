import React from "react";
// import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import "../styles/HeroStyle.css"; // Import the CSS file

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container-custom">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            <div>
              <span className="available-badge">
                ✅ Available now • Immediate joiner
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ibrahim</span>
              {/* <br /> */}
              <span className="name"> Faris.</span>
            </h1>

            <h2 className="hero-subtitle">Full Stack ERP Developer.</h2>

            <p className="hero-description">
              Automating end-to-end business operations through scalable
              enterprise systems, with 8+ years of experience building robust,
              production-grade solutions across complex organizational
              workflows.
            </p>

            <div className="button-group">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LinkedIn
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in touch
              </a>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div>
                <div className="stat-number">8+</div>
                <div className="stat-label">YEARS OF EXPERIENCE</div>
              </div>
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">ERP MODULES DELIVERED</div>
              </div>
              <div>
                <div className="stat-number">20+</div>
                <div className="stat-label">INTEGRATIONS ENGINEERED</div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="hero-right">
            <div className="contact-card">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>Abu Dhabi, United Arab Emirates</span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>+971 56 710 5600</span>
              </div>
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>faris.ibrahimpv@gmail.com</span>
              </div>

              <div className="contact-divider"></div>

              <div>
                <h3 className="languages-title">Languages Spoken</h3>
                <div className="languages-list">
                  {["English", "Hindi", "Malayalam", "Tamil", "Kannada"].map(
                    (lang) => (
                      <span key={lang} className="language-badge">
                        {lang}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
