import React from "react";
import axios from "axios";
import PEvent from "./PEvent";
import Event from './Event';
import "./EventsList.css";
import LoadAnimation from "./LoadAnimation";

const api = axios.create({
  baseURL: `https://osc-api.herokuapp.com`,
});

function EventsList() {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api
      .get("/event/", { crossdomain: true })
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err, res) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className="p-event-title">Upcoming Events</h1>
        {loading ? (
          <LoadAnimation />
        ) : (
          <div className="events">
            {events.map((event) => (
              <Event event={event} />
            ))}
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
