import React from "react";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container pe-4 pt-4 ps-4">
        <div className="text-center text-white">
          <h2 className="pt-3">MY SOCIAL LINKS</h2>
          <div className="d-flex justify-content-center pt-1">
            <a
              className="btn btn-outline-light btn-floating me-1"
              href="https://github.com/fabiodev30"
              role="button"
            >
              <FaGithub />
            </a>
            <a
              className="btn btn-outline-light btn-floating ms-1"
              href="https://www.linkedin.com/in/fabio-angeli-77712621b/"
              role="button"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
