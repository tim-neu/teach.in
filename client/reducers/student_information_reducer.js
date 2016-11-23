import { GET_STUDENT_PHOTO } from '../actions/types';
const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case GET_STUDENT_PHOTO:
			return {...state, studentInformation: action.payload}
		default: 
			return state
	}
}