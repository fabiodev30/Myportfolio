import React from "react";

const Card = (props) => {
  return (
    <a href={props.linksite}>
    <div className="card mb-1" style={{width: '100%', height: '200px'}}>
      <img src={props.image} className="img-fluid h-100" alt="..." />
    </div>
    </a>
  );
};

export default Card;
