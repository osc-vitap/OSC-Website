import React from 'react';
import { Link } from 'react-router-dom';

import "./Card.css"

function Card() {
    return (
        <div className="teams-container">
            <div className="teams-box">
                <h2 className="teams-title">Executive Board 2020</h2>
                <Link to="/team2020"><h2 className="teams-subtitle">Explore &gt;</h2></Link>
            </div>
            <div className="teams-box">
                <h2 className="teams-title">Executive Board 2019 (Archive)</h2>
                <Link to="/team2019"><h2 className="teams-subtitle">Explore &gt;</h2></Link>
            </div>
            <div className="teams-box">
                <h2 className="teams-title">Executive Board 2018 (Founding Batch)</h2>
                <Link to="/team2018"><h2 className="teams-subtitle">Explore &gt;</h2></Link>
            </div>
        </div>
    )
}

export default Card
