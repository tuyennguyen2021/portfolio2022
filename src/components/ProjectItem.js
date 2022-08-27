import React from "react";

function ProjectItem({ image, name, skill, demo, src }) {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      ></div>
      <h1>{name}</h1>
      <h3>Skills: {skill}</h3>
      <div className="liveDemo">
        <a href={demo} target="_blank">
          demo
        </a>
        <a href={src} target="_blank">
          source code
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
