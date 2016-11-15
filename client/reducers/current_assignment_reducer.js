import { SELECT_ASSIGNMENTS } from '../actions/types';

const INITIAL_STATE = {currentAssignment: null};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SELECT_ASSIGNMENTS:
			console.log('the payload is:', action.payload);
			return {...state, currentAssignment: action.payload}
		default: 
			return state
	}
}