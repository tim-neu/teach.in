import React, { Component, PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar';
import { connect } from 'react-redux';
import { getClassEventsRed } from '../../actions/get_class_events_action';
import { createClassEvent } from '../../actions/create_class_action';
import axios from 'axios';
import _ from 'lodash';

BigCalendar.momentLocalizer(moment);

class ClassCalendar extends Component {
  constructor(props){
    super(props);
    if (_.includes(window.location.href, 'studentDashboard')) {
      this.state = { events: [], userType: 'student' };
    } else {
      this.state = { events: [], userType: 'teacher' };
    };
  }

  componentDidMount() {
    this.props.getClassEventsRed(this.state.userType, this.props.classId);
  }

  // getClassEvents(userType,classId) {
  //   var self = this;

  //   if(this.state.userType === 'teacher'){
  //     axios.get(`/api/teacher/classes/class/events?classId=${this.props.classId}`)
  //     .then (function (response) {
  //       function map(arr){
  //         for(var i = 0; i < arr.length; i++){
  //           var obj = arr[i];
  //           _.update(obj, 'start', function(s){
  //             return new Date(s);
  //           });

  //           _.update(obj, 'end', function(e){
  //             return new Date(e);
  //           });
  //         }
  //       }
  //       map(response.data);
  //       console.log('the response data for the calendar issssss:', response.data);
  //       self.setState({events: response.data})
  //     })
  //     .catch(function (error) {
  //     });
  //   } else {
  //     axios.get('/api/student/classes/class/event')
  //     .then (function (response) {
  //       function map(arr){
  //         for(var i = 0; i < arr.length; i++){
  //           var obj = arr[i];
  //           _.update(obj, 'start', function(s){
  //             return new Date(s);
  //           });

  //           _.update(obj, 'end', function(e){
  //             return new Date(e);
  //           });
  //         }
  //       }
  //       map(response.data);
  //         self.setState({events: response.data})
  //     })
  //     .catch(function (error) {
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        <BigCalendar
          {...this.props}
          selectable
          popup
          events={this.props.events}
          timeslots={4}
          step={15}
          style={{height: "350px"}}
          startAccessor={this.props.events.start}
          endAccessor={this.props.events.end}
          scrollToTime={new Date(1970, 1, 1, 7)}
          defaultDate={new Date(2016, 10, 11)}
        />
      </div>
    )
  }
};

function mapStateToProps (state) {
  return {
    events: state.classEvents.classEvents,
  }
}
const ClassCalendarContainer = connect(mapStateToProps, { getClassEventsRed: getClassEventsRed })(ClassCalendar);
export default ClassCalendarContainer;