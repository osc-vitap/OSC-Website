import React from 'react'
import axios from 'axios';
import PEvent from './PEvent';
import './PastEvents.css';

const api = axios.create({
    baseURL: `https://oscwebapi.herokuapp.com/api/posts/`
})

var date_now = new Date().getDate();
var month_now = new Date().getMonth();
var year_now = new Date().getFullYear();

class PastEvents extends React.Component {

    state = {
        past_events: [],
    }

    constructor(){
        super();
        this.getEvents();
    }

    getEvents = async () => {
        try{
            let data = await api.get('/').then(({ data }) => data);
            this.setState({ past_events: data.sort((a,b) => new Date(b.date) - new Date(a.date)) })
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
                {this.state.past_events.map(past_event => (
                    <PEvent event={past_event} />
                ))}
                </div>
            </div>
        )}
}


export default PastEvents;
