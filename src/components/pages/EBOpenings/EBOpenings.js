import React from 'react';
import Header from "../../Header/Header";
import { headerObjEleven } from "../../Header/HeaderData";

function EBOpenings() {
  return (
    <>
      <Header {...headerObjEleven} />
      <div className="board-category5">
        <div className="category-title">Coming Soon</div>
      </div>
    </>
  );
}

export default EBOpenings;