import React from "react";
import "./Divider.css";
import { FaStar } from "react-icons/fa";

const Divider = () => {
  return (
    <div className="divider-custom divider-light">
      <div
        className="white-line me-2"
      ></div>
      <div className="text-white">
        <FaStar style={{ height: "30px", width: "30px" }} />
      </div>
      <div className="white-line ms-2"></div>
    </div>
  );
};

export default Divider;
