import React, { Component, PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar';
import axios from 'axios';
import _ from 'lodash';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
  constructor(props){
    super(props);
    if (_.includes(window.location.href, 'studentDashboard')) {
      this.state = { events: [], userType: 'student' };
    } else {
      this.state = { events: [], userType: 'teacher' };
    };
    this.getAllEvents();
  }

  getAllEvents() {
    var self = this;
    if(this.state.userType === 'teacher'){
      axios.get(`/api/teacher/classes/class/allEvents?email=${this.props.teacherEmail}`)
      .then (function (response) {
        function map(arr){
          for(var i = 0; i < arr.length; i++){
            var obj = arr[i];
            _.update(obj, 'start', function(s){
              return new Date(s);
            });

            _.update(obj, 'end', function(e){
              return new Date(e);
            });
          }
        }
        map(response.data);
        self.setState({events: response.data})
      })
      .catch(function (error) {
        console.log('Hey, sooooo...shit went left when I tried to get TEACHER events:', error);
      });
    } else {
      axios.get('/api/student/classes/class/event')
      .then (function (response) {
        function map(arr){
          for(var i = 0; i < arr.length; i++){
            var obj = arr[i];
            _.update(obj, 'start', function(s){
              return new Date(s);
            });

            _.update(obj, 'end', function(e){
              return new Date(e);
            });
          }
        }
        map(response.data);
          self.setState({events: response.data})
      })
      .catch(function (error) {
        console.log('this is the error with the class event', error);
      });
    }
  }

  render(){
    return (
      <div>
        <BigCalendar
          {...this.props}
          selectable
          popup
          events={this.state.events}
          timeslots={4}
          step={15}
          style={{height: "350px"}}
          startAccessor={this.state.events.start}
          endAccessor={this.state.events.end}
          scrollToTime={new Date(1970, 1, 1, 7)}
        />
      </div>
    )
  }
};