import axios from 'axios';
import { CREATE_CLASS } from './types';

export function createClass(name,start,end,date,classId) {
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
			console.log('the respo in createclassactions is:', resp.data);
			disptach({type: CREATE_CLASS, payload: resp.data});
		})
		.catch( function(err) {
			console.log(' the err in create class is:', err);
		})
	}
};