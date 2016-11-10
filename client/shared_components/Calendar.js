import React, { Component, PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
	constructor(props){
		super(props)
	}

  render(){
  console.log(new Date(2015, 3, 12, 10, 30, 0, 0));
  const events =
  	[
  		{
    		'title': 'All Day Event',
    		'allDay': true,
    		'start': new Date(2015, 3, 0),
    		'end': new Date(2015, 3, 0)
  		},
  		{
  		  'title': 'Long Event',
  		  'start': new Date(2015, 3, 7),
  		  'end': new Date(2015, 3, 10)
  		},
  		{
  		  'title': 'DTS STARTS',
  		  'start': new Date(2015, 3, 13, 0, 0, 0),
  		  'end': new Date(2015, 3, 20, 0, 0, 0)
  		},
  		{
  		  'title': 'DTS ENDS',
  		  'start': new Date(2015, 10, 6, 0, 0, 0),
  		  'end': new Date(2015, 10, 13, 0, 0, 0)
  		},
  		{
  		  'title': 'Some Event',
  		  'start': new Date(2015, 3, 9, 0, 0, 0),
  		  'end': new Date(2015, 3, 9, 0, 0, 0)
  		},
  		{
  		  'title': 'Conference',
  		  'start': new Date(2015, 3, 11),
  		  'end': new Date(2015, 3, 13),
  		  'desc': 'Big conference for important people'
  		},
  		{
  		  'title': 'Meeting',
  		  'start': new Date(2015, 3, 12, 10, 30, 0),
  		  'end': new Date(2015, 3, 12, 12, 30, 0),
  		  'desc': 'Pre-meeting meeting, to prepare for the meeting'
  		},
  		{
  		  'title': 'Lunch',
  		  'start':new Date(2015, 3, 12, 12, 1),
  		  'end': new Date(2015, 3, 12, 13, 1),
  		  'desc': 'Power lunch'
  		},
  		{
  		  'title': 'Meeting',
  		  'start':new Date(2015, 3, 12,14, 0, 0, 0),
  		  'end': new Date(2015, 3, 12,15, 0, 0, 0)
  		},
  		{
  		  'title': 'Happy Hour',
  		  'start':new Date(2015, 3, 12, 17, 0, 0, 0),
  		  'end': new Date(2015, 3, 12, 17, 30, 0, 0),
  		  'desc': 'Most important meal of the day'
  		},
  		{
  		  'title': 'Dinner',
  		  'start':new Date(2015, 3, 12, 20, 0, 0, 0),
  		  'end': new Date(2015, 3, 12, 21, 0, 0, 0)
  		},
  		{
  		  'title': 'Birthday Party',
  		  'start':new Date(2015, 3, 13, 7, 0, 0),
  		  'end': new Date(2015, 3, 13, 10, 30, 0)
  		}
		];
    return (
      <div>
      	<BigCalendar
      		{...this.props}
      		selectable
      		popup
      		events={events}
      		timeslots={4}
      		step={15}
      		style={{height: "500px"}}
      		startAccessor={events.start}
      		endAccessor={events.end}
          scrollToTime={new Date(1970, 1, 1, 7)}
      		defaultDate={new Date(2015, 3, 12)}
     		/>
  		</div>
    )
  }
};