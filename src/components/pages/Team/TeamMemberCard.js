import React from 'react';
import AD from "./../../../images/dranupama.jpg";

import "./TeamMemberCard.css";

function TeamMemberCard() {
    return (
        <div className="mcard-container">
            <img src={AD} className="mcard-image" alt="ad-img"></img>
            <div className="mcard-name">Dr. Anupama Namburu</div>
            <div className="mcard-title">Assistant Director, Student Welfare</div>
            <div className="mcard-flex">
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
                <div className="b4"></div>
            </div>
        </div>
    )
}

export default TeamMemberCard;
