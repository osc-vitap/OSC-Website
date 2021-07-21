import React from 'react'
import './Event.css';


function Event({ event }) {
  const curr_date = new Date();
  const mongo_date = new Date(event.date);
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  if((mongo_date.getFullYear() > curr_date.getFullYear()) || ((mongo_date.getFullYear() === curr_date.getFullYear()) && (mongo_date.getMonth() >= curr_date.getMonth()) && (mongo_date.getDate() > curr_date.getDate()) )){
      return (
      <>
           <div className="event_outer">
            {/* <img src={webhunt} alt="webhunt logo" /> */}
            <div className="event_card_right">
                <div className="event_top">
                    <span className="enent_date">
                        <p>{month[mongo_date.getMonth()].substring(0,3)}</p>
                        <h5>07</h5>
                    </span>
                    <span className="event_title">
                        <h1>{event.title}</h1>
                    </span>
                </div>
                <div className="event_bottom">
                    <p> {event.description} </p>

                    <div className="event_tags">
                        
                            <span>{event.eventType}</span>
                            <span>{event.eventMode}</span>
                        
                    </div>
                </div>
            </div>

        </div>
        
      </>
    )
  }else{
        return null;
    }
}

export default Event;
