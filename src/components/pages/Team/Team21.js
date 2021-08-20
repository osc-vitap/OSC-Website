import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header/Header";
import { headerObjSeventeen } from "../../Header/HeaderData";
import CC from "./../../../images/team/profasish.jpg";
import ph from "./../../../images/team/ph.png";
import cl from "./../../../images/team/eb21/Vijay_CommunityLead.PNG";
import cp from "./../../../images/team/eb21/Adithya_President.JPG";
import vp from "./../../../images/team/eb21/Bhargavi_VicePresident.jpeg";
import dr from "./../../../images/team/harsha.png";
import pr from "./../../../images/team/eb21/Tarini_HeadOfPublicRelations.jpg";
import sc from "./../../../images/team/eb21/Ojasva_Secretary.jpeg";
import tl1 from "./../../../images/team/eb21/Krishna Raj_TechLead.jpg";
import tl2 from "./../../../images/team/eb21/Madhav_TechLead.jpg";
import trl from "./../../../images/team/eb21/SaiPranay_TrackLead.jpg";
import md from "./../../../images/team/eb21/MaheshDasika_TechDepartment.jpg";
import bmd from "./../../../images/team/eb21/BindhuMadhav_TechDepartment.jpg";
import el2 from "./../../../images/team/eb21/Chethan_EventLead.jpg";
import eo from "./../../../images/team/eb21/Abhiram_HeadOfVideographyAndEventOrg.jpg";
import om from "./../../../images/team/eb21/Sabareesh_SocialMediaLead.jpg";
import ce from "./../../../images/team/eb21/chirag_ChiefEditor.jpg";
import d1 from "./../../../images/team/eb21/Teja _ TechLead+Designer.jpg";

import "./TeamMemberCard.css";

function Team21() {
    return (
        <div>
            <Header {...headerObjSeventeen} />
            <div className="board-category1">
                <div className="category-title">Core.</div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={CC} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Prof. Asish K. Dalai</div>
                    <div className="mcard-title">Club Coordinator (Faculty)</div>
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
                    <img src={cl} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Vijay Balaji</div>
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
                    <img src={dr} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">S.V.Harsha Vardhan</div>
                    <div className="mcard-title">Director</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={cp} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Datta Adithya</div>
                    <div className="mcard-title">President</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={vp} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Bhargavi</div>
                    <div className="mcard-title">Vice President</div>
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
                    <img src={pr} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Tarini</div>
                    <div className="mcard-title">Head of Public Relations</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={ph} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Kaarthik</div>
                    <div className="mcard-title">Chairman</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={sc} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Ojasva</div>
                    <div className="mcard-title">Secretary</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                
            </div>
            <div className="board-category2">
                <div className="category-title">Tech.</div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={tl1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Krishna Raj</div>
                    <div className="mcard-title">Technical Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={tl2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Madhav</div>
                    <div className="mcard-title">Technical Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={trl} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Sai Pranay</div>
                    <div className="mcard-title">Track Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
        <div className="mcard-container">
                    <img src={md} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Mahesh Dasika</div>
                    <div className="mcard-title">Developer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
        <div className="mcard-container">
                    <img src={bmd} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Bindhu madhav</div>
                    <div className="mcard-title">Developer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
            </div>
            <div className="board-category3">
                <div className="category-title">Events.</div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={ph} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Maruthi</div>
                    <div className="mcard-title">Event Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={el2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Chethan</div>
                    <div className="mcard-title">Event Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={eo} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Abhiram</div>
                    <div className="mcard-title">Organizer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={om} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Sabareesh Reddy</div>
                    <div className="mcard-title">Outreach Manager</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                
            </div>
            <div className="board-category4">
                <div className="category-title">Design.</div>
            </div>
            <div className="mcard-box">
                <div className="mcard-container">
                    <img src={ce} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Chirag</div>
                    <div className="mcard-title">Chief Editor</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={eo} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Abhiram</div>
                    <div className="mcard-title">Head of Videography</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={trl} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Sai Pranay</div>
                    <div className="mcard-title">Track Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={d1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Teja</div>
                    <div className="mcard-title">Designer</div>
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
