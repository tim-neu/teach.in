import { ALL_TEACHER_ASSIGNMENTS } from '../actions/types';
import { HANDLE_SUBMIT_ASSIGNMENTS } from '../actions/types';
const INITIAL_STATE = {assignments: []};

function addAssignment(prevState, assignments) {
	var prevAssignments = prevState.assignments;
	var newAssignments = prevAssignments.concat(assignments);
	return { ...prevState, assignments: newAssignments };
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case ALL_TEACHER_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return {...state, assignments: action.payload}
		case HANDLE_SUBMIT_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return addAssignment(state, action.payload)
		default: 
			return state
	}
}