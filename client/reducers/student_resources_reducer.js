import { GET_STUDENT_RESOURCES } from '../actions/types';

const INITIAL_STATE = { studentResources: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case GET_STUDENT_RESOURCES:
			console.log('the payload is:', action.payload);
			return { ...state, studentResources: action.payload };
		default:
			return state;
	}
};
