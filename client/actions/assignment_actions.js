import axios from 'axios';

import {ALL_TEACHER_ASSIGNMENTS} from './types';

export function getAssignments (classId) {
	return function(dispatch) {
		axios({
			method: 'GET',
			url: '/api/teacher/classes/class/assignment',
			params: {
				classId: classId
			}
		}).then(function(assignments){
			console.log('assignments:', assignments.data);
			dispatch({type: ALL_TEACHER_ASSIGNMENTS, payload: assignments.data})
		})
	}

}