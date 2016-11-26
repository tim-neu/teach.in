import axios from 'axios';
import { ALL_CLASSES, GET_STUDENT_CLASSES } from './types';

export function getClasses() {
	return function (dispatch) {
	axios({
			method: 'GET',
			url: `/api/teacher/classes?teacherEmail=${localStorage.getItem("email")}`,
		})
		.then(function (resp) {
			console.log('the resp is:', resp);
			dispatch({ type: ALL_CLASSES, payload: resp.data });
		});
	};
};

export function getStudentClasses() {
	return function (dispatch) {
		axios({
			method: 'GET',
			url: `/api/student/classes?studentEmail=${localStorage.getItem("email")}`,
		})
		.then(function (resp) {
			console.log(' the respn in calsses action iss: delete me after pls:', resp);
			dispatch({ type: GET_STUDENT_CLASSES, payload: resp.data });
		});
	};
};
