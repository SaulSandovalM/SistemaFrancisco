import React from 'react';
import * as $ from "jquery";


const styledTextField = {
    width: 'auto',
};


class Events extends React.Component {
    render() {
        return <div id='external-events'>
            <h4 style={{color: "#778BA7"}}>TAREAS</h4>
            <div style={styledTextField}>
            </div>


        </div>;
    }

    componentDidMount() {
        $('#external-events .fc-event').each(function () {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
    }
}

export default Events;