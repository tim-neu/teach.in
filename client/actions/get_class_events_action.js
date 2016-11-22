import axios from 'axios';
import { GET_CLASS_EVENTS } from './types';

export function getClassEvents(classId) {
	return function (dispatch) {
    var self = this;
      axios.get(`/api/teacher/classes/class/events?classId=${classId}`)
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
        // console.log('-----------',response.data);
        dispatch({ type: GET_CLASS_EVENTS, payload: response.data });
      })
      .catch(function (error) {
        console.log('Hey, sooooo...shit went left when I tried to get TEACHER events:', error);
      });
	};
};