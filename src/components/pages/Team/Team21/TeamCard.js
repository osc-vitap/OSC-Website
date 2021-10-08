import react from 'react';
import './teamcard.css';

import { FaDiscord , FaLinkedinIn , FaGithub} from "react-icons/fa";
import {HiMail} from 'react-icons/hi';
function TeamCard(props){
    return(
        <div className="teamCard">
            <div className="teamCardImage" >
                <img src={props.image} alt={props.name} />
            </div>
            <div className="teamCardContent">
                <h4 className="teamCardName">{props.name}</h4>
                <p className="teamCardRole">{props.role}</p>
                {/* <p className="teamCardDescription">{props.description}</p> */}
                <div className="teamCardIcons">
                    <a style={{marginLeft:"-11px"}} className={(props.github === "false" ? 'hide' : 'icon')} target="_blank" rel="noreferrer" href={props.mail}><HiMail size={22} /></a>
                    <a className={(props.github === "false" ? 'hide' : 'icon')} target="_blank" rel="noreferrer" href={props.linkedin}><FaLinkedinIn size={22} /></a>
                    <a className={(props.github === "false" ? 'hide' : 'icon')}  target="_blank" rel="noreferrer" href={props.github}><FaGithub size={22} /></a>
                </div>
            </div>
        </div>
    );
}
export default TeamCard;