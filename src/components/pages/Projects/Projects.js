import React from "react";
import Header from "../../Header/Header";
import { headerObjSixteen } from "../../Header/HeaderData";
import Project_card from "./Project_card";
import "./projects.css";

function Projects() {
  return (
    <>
      <Header {...headerObjSixteen} />

      <div className="projects_container">
        <Project_card
          title="Productivity tracker"
          imgurl="https://raw.githubusercontent.com/Open-Source-Community-VIT-AP/Productivity-tracker/master/assets/Logo.PNG"
          caption="Productivity tracker is an application built to help people stay focused on their tasks by monitoring their activity.
Applications and tools used can be deemed productive or not based on both user preferences as well as the default settings. Users can also customize the level of data they want to share."
          githublink="https://github.com/Open-Source-Community-VIT-AP/Productivity-tracker"
        />

        <Project_card
          title="OSCHub"
          imgurl="https://raw.githubusercontent.com/Open-Source-Community-VIT-AP/oschub/master/assets/oschub-logo.PNG"
          caption="Development of a centralized hub for OSC livestreams, as a part of the WSOC Initiative. 
          
          
          "
          githublink="https://github.com/Open-Source-Community-VIT-AP/oschub"
        />
      </div>
    </>
  );
}

export default Projects;
