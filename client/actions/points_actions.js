import axios from 'axios';
import { GET_CLASS_POINTS } from '../actions/types';

export function getClassGPA(classId) {
	console.log("inside GPA", classId)
	return function (dispatch) {
	axios({
			method: 'GET',
			url: `/api//teacher/classes/class/classGPA?classId=${classId}`,
		})
		.then(function (resp) {
			console.log('the class GPA resp is:', resp);
			dispatch({ type: GET_CLASS_POINTS, payload: resp.data });
		})
		.catch(function(error){
			console.log("error with get points", error)
		})
	};
};