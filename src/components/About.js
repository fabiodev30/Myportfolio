import React from "react";
import "./About.css";
import { FaStar } from "react-icons/fa";

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
        <div class="divider-custom divider-light">
                    <div class="white-line me-2"></div>
                    <div class="text-white"><FaStar style={{height:"30px",width:"30px"}}/></div>
                    <div class="white-line ms-2"></div>
                </div>
        </div>
        <div className="pt-3">
            <h1 className="text-white text-center">Junior Full Stack Web Developer </h1>
            <h5 className="text-white text-center">I design and code beautifully simple things, and I love what I do.</h5>
        </div>
    </div>
  );
};

export default About;
