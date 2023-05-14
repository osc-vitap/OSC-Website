import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { headerObjOne } from "../../Header/HeaderData";
import LoadAnimation from "./../../LoadAnimation";
import PEvent from "./../../PEvent";
import Event from "./../../Event";
import pic1 from "./../../../images/events/1.png"
import pic2 from "./../../../images/events/2.jpg"
import pic3 from "./../../../images/events/3.jpg"
import pic4 from "./../../../images/events/4.jpg"
import pic5 from "./../../../images/events/5.png"
import pic6 from "./../../../images/events/6.jpg"
import pic7 from "./../../../images/events/7.png"
import "./Eventpagestatic.css";

const data = [
    {
        eventLogo: pic1,
        eventName: "GITTY UP: Learn Git & GitHub",
        eventCaption: "Learn Git & GitHub' event bridged the gap for students, enlighting  them towards GitHub proficiency",
        eventDate: "Tue Sep 27 2022 16:00: GMT+0530 (India Standard Time)",
        eventStartTime: "16:00",
    },
    {
        eventLogo: pic2,
        eventName: "React Bootcamp",
        eventCaption: "React Bootcamp gave students a turbocharged ride into the world of web development.",
        eventDate: "Mon Dec 19 2022 16:00: GMT+0530 (India Standard Time)",
        eventStartTime: "16:00",
    },
    {
        eventLogo: pic3,
        eventName: "TechEden 2.0",
        eventCaption: "TechEden 2.0 hackathon encouraged student creativity and innovation, seeding new ideas and technological solutions.",
        eventDate: "Sat Dec 10 2022 10:00: GMT+0530 (India Standard Time)",
        eventStartTime: "10:00",
    },
    {
        eventLogo: pic4,
        eventName: "Cyber Syndicate",
        eventCaption: "OSC organized a thrilling CTF event, challenging participants to navigate through cybersecurity puzzles and capture the flag",
        eventDate: "Sat Jan 21 2023 16:00: GMT+0530 (India Standard Time)",
        eventStartTime: "16:00",
    },
    {
        eventLogo: pic5,
        eventName: "SDG Open Hack",
        eventCaption: "SDG Open Hack united minds and technology, fostering collaborative solutions for a sustainable future.",
        eventDate: "Sun Mar 12 2023 10:00: GMT+0530 (India Standard Time)",
        eventStartTime: "10:00",
    },
    {
        eventLogo: pic6,
        eventName: "TechCast Ep. 4",
        eventCaption: "TechCast, OSC's online guest lecture series, transported students into the minds of industry experts, enriching their knowledge and inspiring innovation.",
        eventDate: "Sat Mar 25 2023 16:00: GMT+0530 (India Standard Time)",
        eventStartTime: "16:00",
    },
    {
        eventLogo: pic7,
        eventName: "Software Freedom Fest (SFF)",
        eventCaption: "TechCast, OSC's online guest lecture series, transported students into the minds of industry experts, enriching their knowledge and inspiring innovation.",
        eventDate: "Sat May 27 2023 10:00: GMT+0530 (India Standard Time)",
        eventStartTime: "10:00",
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