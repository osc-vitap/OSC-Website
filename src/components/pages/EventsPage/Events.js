import React from 'react';
import EventsList from '../../EventsList';
import Header from "../../Header/Header";
import { headerObjOne } from "../../Header/HeaderData";

import "./Events.css";

function Events() {
  return (
    <>
      <Header {...headerObjOne } />
      <EventsList />
    </>
  );
}

export default Events;