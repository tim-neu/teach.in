import { ALL_TEACHER_ASSIGNMENTS } from '../actions/types';
import { HANDLE_SUBMIT_ASSIGNMENTS } from '../actions/types';
const INITIAL_STATE = {assignments: []};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case ALL_TEACHER_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return {...state, assignments: action.payload}
		case HANDLE_SUBMIT_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return {...state}
		default: 
			return state
	}
}