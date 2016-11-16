import axios from 'axios';

import { ALL_STUDENTS } from './types';
import { ADD_STUDENT } from './types';
export function getStudents(className) {
	return function (dispatch) {
		axios({
			method: 'GET',
			url: '/api/teacher/classes/class',
			params: {
				className: className,
			},
		}).then(function (students) {
			dispatch({ type: ALL_STUDENTS, payload: students.data });
		});
	};
}

export function addStudent(student, className) {
	return function (dispatch) {
		axios({
			method: 'POST',
			url: '/api/teacher/classes/class/student',
			data: {
				student: student,
				email: student.value,
				className: className,
			},
		}).then(function (student) {
			console.log('the result is:', student.data);
			dispatch({ type: ADD_STUDENT, payload: student.data });
		});
	};
}

