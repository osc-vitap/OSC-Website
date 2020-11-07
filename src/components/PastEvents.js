import React from 'react'
import axios from 'axios';
import Event from './Event';
import './PastEvents.css';

const api = axios.create({
    baseURL: `https://oscwebapi.herokuapp.com/api/posts/`
})

var date_now = new Date().getDate();
var month_now = new Date().getMonth();
var year_now = new Date().getFullYear();

class PastEvents extends React.Component {

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
            console.log("Date:" + date_now + " Month:" + month_now + " Year:" + year_now);
        }catch(err){
            console.log(err);
        }
    }

    render(){

        return (
            <div>
                <h1 className="p-event-title">Past Events</h1>
                <div className='events'>
                {this.state.current_events.map(current_event => (
                    <Event event={current_event} />
                ))}
                </div>
            </div>
        )}
}


export default PastEvents;
