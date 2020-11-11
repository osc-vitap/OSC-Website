import React from 'react';
import Header from "../../Header/Header";
import { headerObjFifteen } from "../../Header/HeaderData";

function Wios() {
  return (
    <>
      <Header {...headerObjFifteen} />
      <div className="board-category5">
        <div className="category-title">Coming Soon</div>
      </div>
    </>
  );
}

export default Wios;