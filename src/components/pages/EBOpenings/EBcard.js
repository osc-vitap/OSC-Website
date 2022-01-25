import react from 'react';
import './EBcard.css';

function EBcard(props){
    return(


        <div className="eb-container">
            <div className="eb-card" data-label="In Progress">
                <div className="card__container">
                    <h1 className="card__header">{props.role}</h1>
                    <p className="card__body">{props.roled}</p> 
                    <button type="button" class="button button1"><a href="" target="_blank">Apply Now</a></button>
                </div>
            </div>
        </div>
    );
}
export default EBcard;