import React from 'react';
import Header from "../../Header/Header";
import { headerObjFive } from "../../Header/HeaderData";
import TeamMemberCard from './TeamMemberCard';

function Team20() {
    return (
        <div>
            <Header {...headerObjFive} />
            <div className="event-container">
                <h2 className="event-tagline">Together, we are <span className="text-highlight">unbreakable.</span></h2>
            </div>
            <div>
                <TeamMemberCard />
                <TeamMemberCard />
            </div>
        </div>
    )
}

export default Team20;