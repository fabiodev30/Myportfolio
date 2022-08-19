import React from "react";
import "./About.css";
import Divider from "./UI/Divider";

const About = () => {
  return (
    <div className="container">
      <div className="pt-5 d-flex justify-content-center">
        <img
          src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
          className="image-icon"
        />
      </div>
      <div className="pt-3">
        <Divider />
      </div>
      <div className="pt-3 pb-4">
        <h1 className="text-white text-center">
          Junior Full Stack Web Developer{" "}
        </h1>
        <h5 className="text-white text-center">
          I design and code simple things, and I love what I do.
        </h5>
      </div>
    </div>
  );
};

export default About;
