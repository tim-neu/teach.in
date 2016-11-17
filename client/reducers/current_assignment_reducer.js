import { SELECT_ASSIGNMENTS, GET_ASSIGNMENTS_STUDENTS, POST_ASSIGNMENT_GRADE_FOR_STUDENT } from '../actions/types';
import _ from 'lodash';
const INITIAL_STATE = { currentAssignment: null };

function addAssignment(prevState, student) {
	var prevAssignments = prevState.students;
	var newStudents = prevStudents.concat(student);
	return { ...prevState, students: newStudents };
};

function postAssignment (prevState) {
	console.log('prevState.currentAssignment is:', prevState.currentAssignment);
	//_.update(prevState, prevState.currentAssignment
	return { ...prevState};
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SELECT_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return { ...state, currentAssignment: action.payload };
		case GET_ASSIGNMENTS_STUDENTS:
			console.log('the payload for getting all associated students assignments is:', action.payload);
			return { ...state, assignmentStudents: action.payload };
		case POST_ASSIGNMENT_GRADE_FOR_STUDENT:
			console.log('the new student grade is', action.payload);
			return postAssignment(state);
		default:
			return state;
	}
}
