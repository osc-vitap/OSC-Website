import React from "react";
import EBcard from "./EBcard.js";
import "./EBopeninglayout.css";

function EBopeninglayout() {
    const core = [
        {
            role: "Community Leader",
            roled: "The Community Leader is the head of the Open Source Community, and is the one who makes all the decisions.",
            vacancy: false,
        },
        {
            role: "President",
            roled: "The President is the head of the Administration Department, and is the one who governs the actions that is being taken by the Administrative Department.",
            vacancy: false,
        },
        {
            role: "Vice President",
            roled: "The Vice President of the Open Source Community, is the one that provides reports regarding the progress of tasks that are being performed to the President.",
            vacancy: false,
        },
        {
            role: "Chairman",
            roled: "The Chairman is a position in the Administration Department of the Open Source Community who overlooks the proceedings of the event and task management.",
            vacancy: false,
        },
        {
            role: "Secretary",
            roled: "The Secretary of the Open Source Community is one that keeps a record of the proceedings of the event, and the club itself.",
            vacancy: false,
        },
        {
            role: "Head of Public Relations",
            roled: "The Head of Public Relations is a role that interacts with other organizations, reaches out to Sponsors, and overall, maintains the public image of the club.",
            vacancy: false,
        },
        {
            role: "Treasurer",
            roled: "The Treasurer of the Open Source Community, is the one who is in-charge of maintaining the budget of the club.",
            vacancy: false,
        },
    ];
    const tech = [
        {
            role: "Technical Lead",
            roled: "The Technical Lead is the head of the Technical Department and governs the rest of the Department. ",
            vacancy: false,
        },
        {
            role: "Developer",
            roled: "A Developer is a part of the Technical Department and works on various projects that are assigned to them.",
            vacancy: false,
        },
    ];
    const events = [
        {
            role: "Event Lead",
            roled: "The Event Lead is a position that is responsible for the progression of the event, without any obstacles.",
            vacancy: false,
        },
        {
            role: "Social Media",
            roled: "The Social Media is a position that is required to be present at every event, and is required to have good communication and relation-building skills.",
            vacancy: false,
        },
        {
            role: "Organizer",
            roled: "An Organizer is a part of the Event Management Department and is responsible for the organization of an event.",
            vacancy: false,
        },
    ];
    const design = [
        {
            role: "Creative Lead",
            roled: "The Creative Lead is the head of the Creative Department, they are responsible for monitoring the activities of the Creative Department and it's members.",
            vacancy: false,
        },
        {
            role: "Head of Videography",
            roled: "The Head of Videography is a part of the Creative Department, and is the one who creates small introduction sequences and video clips for the Open Source Community.",
            vacancy: false,
        },
        {
            role: "Designer",
            roled: "The Designer is a part of the Creative Department, and they are in charge of creating content and posters for the Open Source Community.",
            vacancy: false,
        },
    ];
    const hrdept = [
        {
            role: "HR Lead",
            roled: "They’re a critical asset when it comes to managing staff, and addressing disputes within a club. From every angle of the work space, they help guide the direction of day-to-day activities, facilitating decisions. ",
            vacancy: false,
        },
        {
            role: "HR Manager",
            roled: "The HR Manager is responsible for members policies and procedures, rewards and recognition programs as well as managing workplace safety initiatives.",
            vacancy: false,
        },
        {
            role: "HR Coordinator",
            roled: "Human Resources coordinator multitasks through actively participating by analyzing members turnover and retention, addressing important matter of the members and organizing work activities for a club.",
            vacancy: false,
        },
    ]

    return (
        <React.Fragment>
            <section>
                <div className="board-category">
                    <div className="category-title">Core.</div>
                </div>
                <div className="tclContainerB">
                    <div className="RowB">
                        {core.map((i) => (
                            <EBcard
                                role={i.role}
                                roled={i.roled}
                                vacancy={i.vacancy}
                            />
                        ))}
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="board-category">
                    <div className="category-title">Tech.</div>
                </div>
                <div className="tclContainerB">
                    <div className="RowB">
                        {tech.map((i) => (
                            <EBcard
                                role={i.role}
                                roled={i.roled}
                                vacancy={i.vacancy}
                            />
                        ))}
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="board-category">
                    <div className="category-title">Events.</div>
                </div>
                <div className="tclContainerB">
                    <div className="RowB">
                        {events.map((i) => (
                            <EBcard
                                role={i.role}
                                roled={i.roled}
                                vacancy={i.vacancy}
                            />
                        ))}
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="board-category">
                    <div className="category-title">Human Resources.</div>
                </div>
                <div className="tclContainerB">
                    <div className="RowB">
                        {hrdept.map((i) => (
                            <EBcard
                                role={i.role}
                                roled={i.roled}
                                vacancy={i.vacancy}
                            />
                        ))}
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="board-category">
                    <div className="category-title">Design.</div>
                </div>
                <div className="tclContainerB">
                    <div className="RowB">
                        {design.map((i) => (
                            <EBcard
                                role={i.role}
                                roled={i.roled}
                                vacancy={i.vacancy}
                            />
                        ))}
                    </div>
                </div>
                <br />
                <br />
            </section>
        </React.Fragment>
    );
}

export default EBopeninglayout;
