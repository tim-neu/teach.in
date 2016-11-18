import React, { Component, PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar';
import axios from 'axios';
import _ from 'lodash';

import CreateClass from '../components/create_class/CreateClass.js';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {events: []};
    this.getAllEvents();
  }

  getAllEvents() {
    var self = this;
    axios.get('/api/teacher/classes/class/event')
    .then (function (response) {
      console.log('This is the response in getAllEvents:', response);
      // console.log('self.state.events ------------------>', self.state.events);

      // resolves all start and event times back into date object
      function map(arr){
        for(var i = 0; i < arr.length; i++){
          var obj = arr[i];
          _.update(obj, 'start', function(s){
            return new Date(s);
          });

          _.update(obj, 'end', function(s){
            return new Date(s);
          });
        }
      }

      map(response.data);
      // console.log('-----------',response.data);

      // response.data[0].start = new Date(response.data[0].start);
      // response.data[0].end = new Date(response.data[0].end);
      self.setState({events: response.data})
    })
    .catch(function (error) {
      console.log('Hey, sooooo...shit went left when I tried to get events:', error);
    });
  }

  render(){
  // console.log('Testing new Date object in Calendar.js:', new Date(2016, 3, 11, 10, 30, 0, 0));
  // console.log('this.state.events',this.state.events)
    return (
      <div>
        <BigCalendar
          {...this.props}
          selectable
          popup
          events={this.state.events}
          timeslots={4}
          step={15}
          style={{height: "400px"}}
          startAccessor={this.state.events.start}
          endAccessor={this.state.events.end}
          scrollToTime={new Date(1970, 1, 1, 7)}
          defaultDate={new Date(2016, 10, 11)}
        />

        <CreateClass />
      </div>
    )
  }
};