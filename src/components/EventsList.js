import React from "react";
import axios from "axios";
import PEvent from "./PEvent";
import Event from "./Event";
import "./EventsList.css";
import LoadAnimation from "./LoadAnimation";

const api = axios.create({
  baseURL: `https://127.0.0.1:5000/api/`,
});

function EventsList() {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api
      .get("/event/", { crossdomain: true })
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err, res) => {
        console.log(err);
      });
  }, []); 

  function noUpcomingEvents() {
    let today = new Date();
    let upcomingEvents = events.filter((event) => {
      let eventDate = new Date(event.eventDate);
      console.log(eventDate);
      return (
        eventDate.getTime() > today.getTime()
      );
    });
    return upcomingEvents.length === 0;
  }

  return (
    <>
      <div>
        <h1 className="p-event-title">Upcoming Events</h1>
        {loading ? (
          <LoadAnimation />
        ) : (
          <div className="events">
            {noUpcomingEvents() ? (
              <h4 className="no-upcoming-events">
                There are currently no upcoming events. Stay tuned!
              </h4>
            ) : (
              events.map((event) => <Event event={event} />)
            )}
          </div>
        )}
      </div>
      <div>
        <h1 className="p-event-title">Past Events</h1>

        {loading ? (
          <LoadAnimation />
        ) : (
          <div className="events">
            {events.map((event) => (
              <PEvent event={event} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default EventsList;
