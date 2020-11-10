import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Header from "../../Header/Header";
import { headerObjThree } from "../../Header/HeaderData";
import ImageSlider from './ImageSlider';

import "./Home.css";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <div className="board-category6">
        <div className="category-title">We &hearts; Open Source.</div>
      </div>
      <HeroSection {...homeObjTwo} />
      <div className="slider-container">
        <div className="item1"><h1 className="item-font">Sneak Peek</h1></div>
        <div className="item2"><ImageSlider /></div>
      </div>
      <HeroSection {...homeObjThree} />
      <Header {...headerObjThree} />
    </>
  );
}

export default Home;