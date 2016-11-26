import { GET_STUDENT_RESOURCES } from '../actions/types';
import { GET_STUDENT_CLASSES } from '../actions/types';

const INITIAL_STATE = { studentResources: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case GET_STUDENT_RESOURCES:
			console.log('the payload is:', action.payload);
			return { ...state, studentResources: action.payload };
		case GET_STUDENT_CLASSES:
			console.log('the payload for get student classes in student resources reducer is:', action.payload);
			return { ...state, studentClasses: action.payload.myData };
		default:
			return state;
	}
};
