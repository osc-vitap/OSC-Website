import React from 'react';
import Header from "../../Header/Header";
import { headerObjSeven } from "../../Header/HeaderData";
import CC from "./../../../images/team/profasish.jpg";
import Pres from "./../../../images/team/akhil.png";
import Tech from "./../../../images/team/ph.png";
import Director from "./../../../images/team/ph.png";
import PR from "./../../../images/team/eb2.png";

function Team18() {
    return (
        <div>
            <Header {...headerObjSeven} />
            <div className="board-category6">
                <div className="category-title">Founders.</div>
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
                    <img src={Pres} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Akhil Surendran</div>
                    <div className="mcard-title">President</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Tech} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Agnibha Chatterjee</div>
                    <div className="mcard-title">Technical Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Director} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Soumya Sudipta</div>
                    <div className="mcard-title">Director</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={PR} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Somsubro Banerjee</div>
                    <div className="mcard-title">Head of Public Relations</div>
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

export default Team18;
