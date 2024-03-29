import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header/Header";
import { headerObjFive } from "../../Header/HeaderData";
import CC from "./../../../images/team/profasish.jpg";
import CL from "./../../../images/team/akhilcl.png";
import Pres from "./../../../images/team/abdul.png";
import CCC from "./../../../images/team/eb2.png";
import Chair from "./../../../images/team/eb14.png";
import Director from "./../../../images/team/aman.png";
import PR from "./../../../images/team/harsha.png";
import VP1 from "./../../../images/team/eb8.png";
import VP2 from "./../../../images/team/vijay.png";
import Sec from "./../../../images/team/ph.png";
import Tres from "./../../../images/team/eb13.png";
import Tech1 from "./../../../images/team/jay.png";
import Tech2 from "./../../../images/team/eb12.png";
import Tech3 from "./../../../images/team/eb6.png";
import Tech4 from "./../../../images/team/saipranay.png";
import Event1 from "./../../../images/team/navya.png";
import Event2 from "./../../../images/team/eb3.png";
import Design1 from "./../../../images/team/bhavana.png";
import Design2 from "./../../../images/team/ph.png";
import Design3 from "./../../../images/team/ph.png";
import Design4 from "./../../../images/team/saurav.png";
import Content1 from "./../../../images/team/chirag.png";
import Content2 from "./../../../images/team/ph.png";

import "./TeamMemberCard.css";

function Team20() {
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
                    <img src={CL} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Krishna Akhil A.</div>
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
                    <img src={CCC} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Somsubro Banerjee</div>
                    <div className="mcard-title">Campus Club Captain</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Pres} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Mohammad Abdul Razzaq</div>
                    <div className="mcard-title">President</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Chair} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Shashaank Babu R</div>
                    <div className="mcard-title">Chairman</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Director} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Aman Rangapur</div>
                    <div className="mcard-title">Director</div>
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
                    <img src={VP1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">G V Datta Adithya</div>
                    <div className="mcard-title">Vice President</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={VP2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Vijay Balaji</div>
                    <div className="mcard-title">Vice President</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Sec} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Rakesh Ranjan</div>
                    <div className="mcard-title">Secretary</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Tres} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Jaswanthi Boppisetty</div>
                    <div className="mcard-title">Treasurer</div>
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
                    <img src={Tech1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Jayakumar MHK</div>
                    <div className="mcard-title">Technical Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Tech2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Adarsh Srivastava</div>
                    <div className="mcard-title">Technical Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Tech3} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Amit Kumar Sahu</div>
                    <div className="mcard-title">Track Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
        <div className="mcard-container">
                    <img src={Tech4} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Sai Pranay</div>
                    <div className="mcard-title">Track Lead (Web)</div>
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
                    <img src={Event1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Navya Katakam</div>
                    <div className="mcard-title">Event Manager</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Event2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Sanket Ashok Mahadik</div>
                    <div className="mcard-title">Event Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={PR} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">S V Harshavardhan</div>
                    <div className="mcard-title">Public Relations</div>
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
                    <img src={Design1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Bhavana Mokkapati</div>
                    <div className="mcard-title">Editorial Lead</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Design2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Abhay Chaudhary</div>
                    <div className="mcard-title">Graphic Designer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Design2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Terala Srujan</div>
                    <div className="mcard-title">Graphic Designer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Design3} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Gunotham Solanki</div>
                    <div className="mcard-title">Head of Videography</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Design4} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Saurav Menon</div>
                    <div className="mcard-title">Social Media Relations</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Content1} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Chirag Gupta</div>
                    <div className="mcard-title">Content Writer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
                <div className="mcard-container">
                    <img src={Content2} className="mcard-image" alt="ad-img"></img>
                    <div className="mcard-name">Angel Maria</div>
                    <div className="mcard-title">Content Writer</div>
                    <div className="mcard-flex">
                        <div className="b1"></div>
                        <div className="b2"></div>
                        <div className="b3"></div>
                        <div className="b4"></div>
                    </div>
                </div>
            </div>
            <div className="teams-general-container">
            <div className="teams-general-box">
                <h2 className="teams-general-title">Women In Open Source</h2>
                <Link to="/wiosteam2020"><h2 className="teams-general-subtitle">Explore &gt;</h2></Link>
            </div>
            </div>
        </div>
    )
}

export default Team20;
