import react from 'react';
import './teamcard.css';

import { FaDiscord , FaLinkedinIn , FaGithub} from "react-icons/fa";
import {HiMail} from 'react-icons/hi';
function TeamCard(props){
    return(
        <div className="TeamCardWrapper" >
            <div className="Card">
                <div className="CardBody">
                    <div className="user-picture" style={{backgroundImage: `url("${props.image}")`}}></div>
                    <div className="user-content">
                        <h4 className="user-name">Sai Pranay</h4>
                        <p className="role">Web developer</p>
                        {/* <p className="description">{props.description}</p> */}
                        <div className="teamCardIcons">
                            <a className="icon" target="_blank" rel="noreferrer" href={props.facebook}><FaDiscord size={22}/></a>
                            <a className="icon" target="_blank" rel="noreferrer" href={props.mail}><HiMail size={22} /></a>
                            <a className="icon" target="_blank" rel="noreferrer" href={props.linkedin}><FaLinkedinIn size={22} /></a>
                            <a className="icon" target="_blank" rel="noreferrer" href={props.github}><FaGithub size={22} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TeamCard;