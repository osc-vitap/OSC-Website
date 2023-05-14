import React from "react";
import "./Event.css";

function Event({ event }) {
  
  function tConvert(timeString) {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 ? " AM" : " PM";
    timeString = h + ampm;
    return timeString;
  }

  function dateConvert(date) { 
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    var day = date.substr(8, 2);
    var monthIndex = date.substr(5, 2);
    var year = date.substr(0, 4);
    return monthNames[monthIndex - 1] + " " + day + ", " + year;
  }

  const curr_date = new Date();
  const mongo_date = new Date(event.eventDate);
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
  if (
    mongo_date.getFullYear() < curr_date.getFullYear() ||
    (mongo_date.getFullYear() === curr_date.getFullYear() &&
      mongo_date.getMonth() < curr_date.getMonth()) ||
    (mongo_date.getFullYear() === curr_date.getFullYear() &&
      mongo_date.getMonth() === curr_date.getMonth() &&
      mongo_date.getDate() < curr_date.getDate())
  ) {
    return (
      <>
        <div className="event_card">
          <img
            className="event_event_image"
            src={event.eventLogo}
            alt={event.eventName}
          />
          <div className="event_content">
            <div className="event_top">
              <h2>{event.eventName}</h2>
              <p>{event.eventCaption}</p>
            </div>
            <div className="event_bottom">
              <span>
                <p>
                  {dateConvert(event.eventDate)} | {tConvert(event.eventStartTime)}
                </p>
              </span>
              
              {/* <a href={"https://osc-hub.herokuapp.com/eventreg/event/"+event.id} target="_" className="event_button">Know more</a> */}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Event;
