import axios from 'axios';
import { CREATE_CLASS_EVENT } from './types';
import { ADD_CLASS } from './types';

export function createClassEvent(name,start,end,date,classId) {
	return function (dispatch) {
		axios({
				method: 'POST',
				url: '/api/teacher/classes/class/event', 
				data: {
					name: name,
					start: start,
					end: end,
					date: date,
					classId: classId,
				}
		})
		.then (function(resp){
			console.log('the respo in createclassactions createClassEvent is:', resp.data);
			disptach({type: CREATE_CLASS_EVENT, payload: resp.data});
		})
		.catch( function(err) {
			console.log(' the err in create class event is:', err);
		})
	}
};

export function addClass(name,start,end,date,classId) {
	return function (dispatch) {
		axios({
				method: 'POST',
				url: '/api/teacher/classes/class/addClass', 
				data: {
					name: name,
					start: start,
					end: end,
					date: date,
					classId: classId,
				}
		})
		.then (function(resp){
			console.log('the respo in createclassactions addClass is:', resp.data);
			disptach({type: ADD_CLASS, payload: resp.data});
		})
		.catch( function(err) {
			console.log(' the err in add class is:', err);
		})
	}
};