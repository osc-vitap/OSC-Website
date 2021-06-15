import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header/Header";
import { headerObjFive } from "../../Header/HeaderData";
import CC from "./../../../images/team/profasish.jpg";
import CL from "./../../../images/team/vijay.png";
import Pres from "./../../../images/team/eb8.png";
// import CCC from "./../../../images/team/eb2.png";
// import Chair from "./../../../images/team/eb14.png";
// import Director from "./../../../images/team/aman.png";
// import PR from "./../../../images/team/harsha.png";
// import VP1 from "./../../../images/team/eb8.png";
// import VP2 from "./../../../images/team/vijay.png";
// import Sec from "./../../../images/team/ph.png";
// import Tres from "./../../../images/team/eb13.png";
// import Tech1 from "./../../../images/team/jay.png";
// import Tech2 from "./../../../images/team/eb12.png";
// import Tech3 from "./../../../images/team/eb6.png";
// import Tech4 from "./../../../images/team/saipranay.png";
// import Event1 from "./../../../images/team/navya.png";
// import Event2 from "./../../../images/team/eb3.png";
// import Design1 from "./../../../images/team/bhavana.png";
// import Design2 from "./../../../images/team/ph.png";
// import Design3 from "./../../../images/team/ph.png";
// import Design4 from "./../../../images/team/saurav.png";
// import Content1 from "./../../../images/team/chirag.png";
// import Content2 from "./../../../images/team/ph.png";

import "./TeamMemberCard.css";

function Team21() {
    return (
        <div>
            <Header {...headerObjFive} />
            <div className="board-category1">
                <div className="category-title">Core.</div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={CC} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Prof. Asish K. Dalai</div>
                    <div className="mcard-title">Club Coordinator, Open Source Community</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={CL} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">S Vijay Balaji</div>
                    <div className="mcard-title">Community Leader</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={Pres} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">G V Datta Adithya</div>
                    <div className="mcard-title">President</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team21;
