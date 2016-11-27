import axios from 'axios';
import { GET_CLASS_EVENTS } from './types';

export function getClassEventsRed(userType, classId) {
  console.log('user type in get class action is:', userType);
  console.log('classId in get class action is:', classId);
  return function (dispatch) {
    if (userType === 'teacher') {
      axios.get(`/api/teacher/classes/class/events?classId=${classId}`)
      .then(function (response) {
        function map(arr) {
          for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            _.update(obj, 'start', function (s) {
              return new Date(s);
            });

            _.update(obj, 'end', function (e) {
              return new Date(e);
            });
          }
        };

        map(response.data);
        console.log('the response data for the calendar issssss:', response.data);
        // self.setState({events: response.data})
        dispatch({ type: GET_CLASS_EVENTS, payload: response.data });
      })
      .catch(function (error) {
      });
    } else {
      axios.get('/api/student/classes/class/event')
      .then(function (response) {
        function map(arr) {
          for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            _.update(obj, 'start', function (s) {
              return new Date(s);
            });

            _.update(obj, 'end', function (e) {
              return new Date(e);
            });
          }
        };

        map(response.data);
          dispatch({ type: GET_CLASS_EVENTS, payload: response.data });
      })
      .catch(function (error) {
      });
    }
  }
};
