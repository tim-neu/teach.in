import {ALL_STUDENTS} from '../actions/types';

const INITIAL_STATE = {students: []};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case ALL_STUDENTS:
			console.log('the payload is:', action.payload);
			return {...state, students: action.payload}
		default: 
			return state
	}
}