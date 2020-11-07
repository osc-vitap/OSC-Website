import React from 'react';
import CurrentEvents from '../../CurrentEvents';
import PastEvents from '../../PastEvents';
import Header from "../../Header/Header";
import { headerObjOne } from "../../Header/HeaderData";

function Events() {
  return (
    <>
      <Header {...headerObjOne } />
      <CurrentEvents />
      <PastEvents />
    </>
  );
}

export default Events;