import { ADD_Teacher_PICTURE, GET_TEACHER_PHOTO } from '../actions/types';
const INITIAL_STATE = {profilePicture: ''};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case ADD_Teacher_PICTURE:
			return {...state, profilePicture: action.payload}
		case GET_TEACHER_PHOTO:
			return {...state, profilePicture: action.payload}
		default: 
			return state
	}
}