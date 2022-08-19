import React from "react";
import Card from "./UI/Card";
import Divider from "./UI/Divider";

const Projects = (props) => {
  return (
    <div className="container text-white">
      <h1 className="text-center pt-5">MY PROJECTS</h1>
      <div>
        <Divider />
      </div>
      <div className="row pt-1 pb-5">
      {props.progetti.map((progetto,index) =>
        <div className="col-lg-4" key={index}>
                  <Card image={progetto.hrefimage} linksite={progetto.linksite}/>
        </div>
      )}
      </div>
    </div>
  );
};

export default Projects;
