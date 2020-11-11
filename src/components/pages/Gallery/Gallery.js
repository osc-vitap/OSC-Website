import React from 'react';
import Header from "../../Header/Header";
import { headerObjNine } from "../../Header/HeaderData";

function Gallery() {
  return (
    <>
      <Header {...headerObjNine} />
      <div className="board-category5">
        <div className="category-title">Coming Soon</div>
      </div>
    </>
  );
}

export default Gallery;