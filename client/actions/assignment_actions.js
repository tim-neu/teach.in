import axios from 'axios';
import { HANDLE_SUBMIT_ASSIGNMENTS } from './types';
import { ALL_TEACHER_ASSIGNMENTS } from './types';
import { SELECT_ASSIGNMENTS } from './types';
import { GET_ASSIGNMENTS_STUDENTS } from './types';
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

export function handleSubmitAssignment (name, classTitle, type, date, maxPoints) {
	return function(dispatch) {
		axios.post('/api/teacher/classes/class/assignment', {
					name: name,
					className: classTitle,
					type: type,
					dueDate: date,
					maxPoints: maxPoints
				})
			  .then(function (response) {
					console.log('assignments:', response.data);
					dispatch({type: HANDLE_SUBMIT_ASSIGNMENTS, payload: response.data})
  			})
  	  	.catch(function (error) {
  	  		console.log("error with the assignment post");
  	  	})
	}

}

export function selectAssignment(assignment) {
	return function(dispatch) {
		dispatch({ type: SELECT_ASSIGNMENTS, payload: assignment });
	};
}

export function getAssignmentsStudents(classTitle, assignmentName,classId) {
	return function (dispatch) {
		axios({
			method: 'GET',
			url: '/api/teacher/classes/class/assignment/students',
			params: {
				classTitle: classTitle,
				assignmentName: assignmentName,
				classId: classId,
			}
		})
		.then(function(response){
			console.log('the assignment students are:', response.data);
			dispatch({type: GET_ASSIGNMENTS_STUDENTS, payload: response.data})
		});
	};
};


