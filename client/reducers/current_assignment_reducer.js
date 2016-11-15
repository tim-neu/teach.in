import { SELECT_ASSIGNMENTS } from '../actions/types';

const INITIAL_STATE = {currentAssignment: null};

function addAssignment(prevState, student) {
	var prevAssignments = prevState.students;
	var newStudents = prevStudents.concat(student);
	return { ...prevState, students: newStudents };
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SELECT_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return {...state, currentAssignment: action.payload}
		default: 
			return state
	}
}