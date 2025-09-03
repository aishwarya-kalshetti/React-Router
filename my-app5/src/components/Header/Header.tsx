import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../App.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
            />
          </Link>
          <div className="nav-actions">
            <Link to="#" className="login-btn">
              Log in
            </Link>
            <Link to="#" className="start-btn">
              Get started
            </Link>
          </div>
          <div className="menu" id="mobile-menu">
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "menu-link active" : "menu-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "menu-link active" : "menu-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "menu-link active" : "menu-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    isActive ? "menu-link active" : "menu-link"
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
