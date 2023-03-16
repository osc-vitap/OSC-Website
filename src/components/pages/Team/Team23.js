import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header/Header";
import { headerObjNineteen} from "../../Header/HeaderData";


import Team23_layout from './Team23/Team23_layout';

import "./TeamMemberCard.css";

function Team23() {

    


    return (
        <div>
            <Header {...headerObjNineteen} />
            <Team23_layout/>            
        </div>
    )
}

export default Team23;
