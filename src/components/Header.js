import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#343a40"}}>
      <div className="container p-3">
        <a className="navbar-brand text-white" href="#">
          FABIO ANGELI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
