import { GET_CLASS_EVENTS } from '../actions/types';

const INITIAL_STATE = { classEvents: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case GET_CLASS_EVENTS:
			return { ...state, classEvents: action.payload };
		default:
			return state;
	}
};