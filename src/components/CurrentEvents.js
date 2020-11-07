import React from 'react'
import axios from 'axios';
import Event from './Event';
import './CurrentEvents.css';

const api = axios.create({
    baseURL: `https://oscwebapi.herokuapp.com/api/posts/`
})

var now = Date(Date.now);

class CurrentEvents extends React.Component {

    state = {
        current_events: []
    }

    constructor(){
        super();
        this.getEvents();
    }

    getEvents = async () => {
        try{
            let data = await api.get('/').then(({ data }) => data);
            this.setState({ current_events: data})
            console.log(now);
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (
            <div>
                <h1 className="u-event-title">Upcoming Events</h1>
                <div className='events'>
                {this.state.current_events.map(current_event => (
                    <Event event={current_event} />
                ))}
                </div>
            </div>
        )}
}

export default CurrentEvents
