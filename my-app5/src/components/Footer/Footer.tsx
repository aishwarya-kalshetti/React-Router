import React from "react";
import { Link } from "react-router-dom";
import '../../App.css'
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/" className="logo-link">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="footer-links">
            <div>
              <h2 className="footer-title">Resources</h2>
              <ul>
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Follow us</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/aishwarya-kalshetti"
                    className="footer-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="footer-link">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Legal</h2>
              <ul>
                <li>
                  <Link to="#" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2024{" "}
            <a
              href="https://aishwarya-kalshetti.com/"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              aishwaryakalshetti
            </a>{" "}
            . All Rights Reserved.
          </span>

          <div className="footer-icons">
            <Link to="#" className="footer-icon">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="footer-icon">
              <i className="fab fa-discord"></i>
            </Link>
            <Link to="#" className="footer-icon">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="footer-icon">
              <i className="fab fa-github"></i>
            </Link>
            <Link to="#" className="footer-icon">
              <i className="fab fa-dribbble"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
