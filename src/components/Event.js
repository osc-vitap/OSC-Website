import React from 'react'
import './Event.css';

function Event({ event }) {
    return (
      <>
        <div className='event-item'>
          <div className='event-preview'>
            <div className='event-title'>
              {event.title}
            </div>
            <div className="test"></div>
            <br></br>
            <div className='event-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='event-type'>
              {event.eventType}
            </div>
            <div className='event-mode'>
              {event.eventMode}
            </div>
            <div className='event-date'>
              {event.date}
            </div>
          </div>
        </div>
      </>
    )
}

export default Event
