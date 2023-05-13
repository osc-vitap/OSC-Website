import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { headerObjOne } from "../../Header/HeaderData";
import axios from "axios";
import LoadAnimation from "./../../LoadAnimation";
import PEvent from "./../../PEvent";
import Event from "./../../Event";
import pic1 from "./../../../images/team/eb23/dhruv_VP.jfif"

const data = [
    {
        eventLogo: pic1,
        eventName: "chutiya",
        eventCaption: "talented peeps",
        eventDate: "16-05-2023",
        eventStartTime: "9:10 AM",
    }
]

function EventList () {
    const [events, setEvents] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setEvents(data);
        setLoading(false);
    })

    function noUpcomingEvents() {
        let today = new Date()
        let upcomingEvents = events.filter((event) => {
          let eventDate = new Date(event.eventDate)
          console.log(eventDate)
          return (
            eventDate.getTime() > today.getTime()
          )
        })
        return upcomingEvents.length === 0
    }

    return (
        <div>
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
        </div>
    )
}

export default function EventPageStatic () {
    return (
        <div>
            <Header {...headerObjOne } />
            <EventList/>
        </div>
    )
}