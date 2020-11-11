import React from 'react';
import Header from "../../Header/Header";
import { headerObjFourteen } from "../../Header/HeaderData";

function EBElections() {
  return (
    <>
      <Header {...headerObjFourteen} />
      <div className="board-category5">
        <div className="category-title">2020 Board Decided.</div>
      </div>
    </>
  );
}

export default EBElections;