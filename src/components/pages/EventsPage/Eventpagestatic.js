import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { headerObjOne } from "../../Header/HeaderData";
import LoadAnimation from "./../../LoadAnimation";
import PEvent from "./../../PEvent";
import Event from "./../../Event";
import pic1 from "./../../../images/team/eb23/ADITYA_organizer.jpg"
import "./Eventpagestatic.css";

const data = [
    {
        eventLogo: pic1,
        eventName: "chutiya",
        eventCaption: "talented peeps",
        eventDate: "Sun May 13 2023 00:30:57 GMT+0530 (India Standard Time)",
        eventStartTime: "9:10",
    }
]

function EventList () {
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setLoading(false);
    })

    function noUpcomingEvents() {
        let today = new Date()
        let upcomingEvents = data.filter((event) => {
          let eventDate = new Date(event.eventDate)
          console.log(eventDate.getTime())
          console.log(today)
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
                            data.map((event) => <Event event={event} />)
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
                        {data.map((event) => (
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