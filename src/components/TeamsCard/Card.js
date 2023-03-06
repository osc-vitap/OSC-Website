import React from 'react';
import { Link } from 'react-router-dom';

import "./Card.css"

function Card() {
    return (
        <div className="teams-general-container">
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2023</h2>
                <Link to="/team2023"><h2 className="teams-general-subtitle">Explore&gt;</h2></Link>
            </div>
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2022</h2>
                <Link to="/team2022"><h2 className="teams-general-subtitle">Explore&gt;</h2></Link>
            </div>
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2021</h2>
                <Link to="/team2021"><h2 className="teams-general-subtitle">Explore&gt; </h2></Link>
                {/* <Link className='linktag' to="/EBOpenings"><h2 className="teams-general-subtitle">Openings&gt;</h2></Link> */}
            </div>
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2020</h2>
                <Link to="/team2020"><h2 className="teams-general-subtitle">Explore&gt;</h2></Link>
            </div>
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2020: WiOS</h2>
                <Link to="/wiosteam2020"><h2 className="teams-general-subtitle">Explore&gt;</h2></Link>
            </div>
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2019 (Archive)</h2>
                <Link to="/team2019"><h2 className="teams-general-subtitle">Explore&gt;</h2></Link>
            </div>
            <div className="teams-general-box">
                <h2 className="teams-general-title">Executive Board 2018 (Founding Batch)</h2>
                <Link to="/team2018"><h2 className="teams-general-subtitle">Explore&gt;</h2></Link>
            </div>
        </div>
    )
}

export default Card
