import React, { Component, PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar';
import axios from 'axios';
import _ from 'lodash';

BigCalendar.momentLocalizer(moment);

export default class ClassCalendar extends Component {
  constructor(props){
    super(props);
    if (_.includes(window.location.href, 'studentDashboard')) {
      this.state = { events: [], userType: 'student' };
      console.log('i set the state to student for calendar', this.state.userType);
    } else {
      this.state = { events: [], userType: 'teacher' };
      console.log('i set the state to teacher for calendar', this.state.userType);
    };
    
  }

  componentDidMount() {
    this.getClassEvents();
  }

  getClassEvents() {
    var self = this;
    if(this.state.userType === 'teacher'){
      axios.get(`/api/teacher/classes/class/events?classId=${this.props.classId}`)
      .then (function (response) {
        console.log('This is the response in getClassEvents:', response);
        // console.log('self.state.events ------------------>', self.state.events);
        // resolves all start and event times back into date object
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
        // console.log('-----------',response.data);
        self.setState({events: response.data})
      })
      .catch(function (error) {
        console.log('Hey, sooooo...shit went left when I tried to get TEACHER events:', error);
      });
    } else {
      axios.get('/api/student/classes/class/event')
      .then (function (response) {
        console.log('This is the response in getClassEvents for students:', response);
        // console.log('self.state.events ------------------>', self.state.events);
        // resolves all start and event times back into date object
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
        // console.log('-----------',response.data);
          self.setState({events: response.data})
      })
      .catch(function (error) {
        console.log('Hey, sooooo...shit went left when I tried to get STUDENT\'S events:', error);
      });
    }
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
      </div>
    )
  }
};