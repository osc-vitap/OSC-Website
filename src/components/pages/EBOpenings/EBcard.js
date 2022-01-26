import react from 'react';
import './EBcard.css';

function EBcard(props){
    return(


        <div className="eb-container">
            <div className="eb-card" data-label={(props.vacancy ? "Position Open" : "No Vacancy")} >
                <div className="card__container">
                    <h2 className="card__header">{props.role}</h2>
                    <p className="card__body">{props.roled}</p> 
                    <div className={(props.vacancy ? 'show' : 'hide')}>
                    <button type="button" className="button button1" >
                        <a href="https://osc464741.typeform.com/to/OCxoQGXo" rel="noreferrer" target="_blank">Apply Now</a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EBcard;