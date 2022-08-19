import React from "react";
import Card from "./UI/Card";
import Divider from "./UI/Divider";

const Projects = (props) => {
  return (
    <div className="container text-white">
      <h1 className="text-center pt-3">MY PROJECTS</h1>
      <div>
        <Divider />
      </div>
      <div class="row">
      {props.progetti.map((progetto,index) =>
        <div class="col-lg-4">
                  <Card image={progetto.hrefimage} linksite={progetto.linksite}/>
        </div>
      )}
      </div>
    </div>
  );
};

export default Projects;
