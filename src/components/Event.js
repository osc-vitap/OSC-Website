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
          <div className='event-preview'>
            <div className='event-title linear-wipe'>
              {event.title}
            </div>
            <div className="test"></div>
            <br></br>
            <div className='event-description'>
            {event.description}
            </div>
            <div className='event-type'>
              {event.eventType}
            </div>
            <div className='event-mode'>
              Venue: {event.eventMode}
            </div>
            <div className='event-date'>
              Date: {month[mongo_date.getMonth()]} {mongo_date.getDate()}, {mongo_date.getFullYear()}
            </div>
          </div>
      </>
    )
  }else{
        return (
          "-"
        );
      }
}

export default Event;
