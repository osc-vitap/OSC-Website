import React from 'react';
import Header from "../../Header/Header";
import { headerObjTwo } from "../../Header/HeaderData";
import CCImage from "../../../images/about/profasish.JPG";
import MMCP from "../../../images/about/mozcc.png";
import { motion } from "framer-motion";

import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptop, faTrophy } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
  return (
    <>
      <Header {...headerObjTwo} />
      <div className="about-section1">
        <div className="about-section-title">Activity Highlights.</div>
      </div>
      <div className="activities-container">
        <div className="card-1">
          <motion.div
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} className="icon-box"><FontAwesomeIcon icon={faTrophy} className="iconbox-item"/>
            </motion.div>
            <div className="card-title">Competitions</div>
            <div className="card-text">A spirit of competition teaches us the importance of taking a healthy risk instead of only doing activities that we are comfortable with. We organize global and club level hackathons, ideathons, developer treasure hunts and a lot more to give our members the exposure to quality events during their time at the club.</div>
        </div>
        <div className="card-1">
          <motion.div
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} className="icon-box"><FontAwesomeIcon icon={faLaptop} className="iconbox-item"/>
            </motion.div>
            <div className="card-title">Workshops</div>
            <div className="card-text">Hands-on experience is important for an individual to experiment and understand the in-depth process of various technologies. Our partnerships with international chapters and organizations bring in global experiences for our club members during our workshops and seminars.</div>
        </div>
        <div className="card-1">
          <motion.div
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} className="icon-box"><FontAwesomeIcon icon={faGlobe} className="iconbox-item"/>
            </motion.div>
            <div className="card-title">Tech Summits</div>
            <div className="card-text">Summits and Tech Days help bring developers across the globe together. As open source advocates, we organize events like Software Freedom Day and others that help us in bringing together tech enthusiasts from various domains together.</div>
        </div>
      </div>
      {/* <div className="about-section1">
        <div className="about-section-title">Board of Directors.</div>
      </div> */}
      {/* <div className="cc-message-container">
        <div className="cc-image-container">
          <img src={CCImage} className="cc-image"></img>
        </div>
        <div className="cc-message">
          <p>Dear Reader,</p><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br></br>
          <p>Prof. Asish Kumar Dalai</p>
          <p>Coordinator</p>
        </div>
      </div> */}
      <div className="about-section1">
        <div className="about-section-title">Official Partner.</div>
      </div>
      <div className="partner-image-container">
        <img src={MMCP} className="partner-img"></img>
      </div>
    </>
  );
}

export default AboutPage;