import React from 'react';
import Events from './Events'
import Calendar from './Calendar';
import {connect} from 'react-redux';
import './Calendar.css';


class CalendarContainer extends React.Component {

    render() {
        return (
            <div className={'conenedor-cal-task'}>
                <Events/>
                <Calendar/>
            </div>
        );
    }
}


export default CalendarContainer;
