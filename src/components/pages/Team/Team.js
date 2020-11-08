import { Card } from '@material-ui/core';
import React from 'react';
import Header from "../../Header/Header";
import { headerObjFour } from "../../Header/HeaderData";
import TeamsCard from "./../../TeamsCard/Card";

function Team() {
  return (
    <>
      <Header {...headerObjFour} />
      <div className="event-container">
        <h2 className="event-tagline">Together, we are <span className="text-highlight">unbreakable.</span></h2>
      </div>
      <TeamsCard />
    </>
  );
}

export default Team;