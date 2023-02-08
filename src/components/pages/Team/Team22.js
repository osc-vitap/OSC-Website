import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header/Header";
import { headerObjEighteen} from "../../Header/HeaderData";


import Team22_layout from './Team22/Team22_layout';

import "./TeamMemberCard.css";

function Team22() {

    


    return (
        <div>
            <Header {...headerObjEighteen} />
            <Team22_layout/>            
        </div>
    )
}

export default Team22;
