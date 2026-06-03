import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import "../styles/HeaderStyle.css"; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`header ${isScrolled ? "header-scrolled" : "header-transparent"}`}
    >
      <div className="container-custom">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-container">
            <h1 className="logo-text">Ibrahim Faris P</h1>
            <p className="logo-subtitle">Full Stack ERP Developer</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="desktop-contact">
            <a href="#contact" className="contact-btn">
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mobile-contact-btn"
              >
                Get in touch
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
