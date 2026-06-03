import React from "react";
import { Heart } from "lucide-react";
import "../styles/FooterStyle.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-custom footer-content">
        <p className="footer-text">
          © 2026 Ibrahim Faris P. Crafted with{" "}
          <Heart size={16} className="footer-heart" /> for interviews.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
