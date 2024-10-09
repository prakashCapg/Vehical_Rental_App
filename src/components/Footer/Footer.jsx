import React from "react";
import "./Footer.css";
import logo from "../Footer/logo.jpg";
import whatsapp from "../Footer/whatsapp.png";
import google from "../Footer/google.jpg";
import instagram from "../Footer/instagram.jpg";
import twitter from "../Footer/twitter.jpg";
import facebook from "../Footer/facebook.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <div className="footer-logo-text-container">
            <img src={logo} alt="Car Rental Logo" className="footer-logo" />
            <span className="footer-logo-text">CAR Rental Service</span>
          </div>
          <p className="footer-copyright">@copyrights.abc.abc</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy</a>
            <a href="#cookies">Cookies Policy</a>
          </div>
          <div className="footer-column">
            <a href="#policies">Policies</a>
            <a href="#about">About Us</a>
          </div>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={google} alt="Google" className="social-icon" />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
