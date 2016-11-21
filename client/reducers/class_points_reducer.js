import { GET_CLASS_POINTS } from '../actions/types';

const INITIAL_STATE = { class_points: 0 };

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case GET_CLASS_POINTS:
			console.log('the payload is:', action.payload);
			return { ...state, class_points: action.payload };
		default:
			return state;
	}
};