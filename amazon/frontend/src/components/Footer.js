import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <Link to="/" className="footer-link">
          <h3> About Us </h3>
        </Link>
        |
        <Link to="/" className="footer-link">
          <h3> Contact Us </h3>
        </Link>
        |
        <Link to="/" className="footer-link">
          <h3> Promotions </h3>
        </Link>
        |
        <Link to="/" className="footer-link">
          <h3> FAQ </h3>
        </Link>
      </div>

      <h4>SCAMAZON © 2022</h4>
    </div>
  );
}

export default Footer;
