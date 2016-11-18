import { GET_RESOURCES } from '../actions/types';

const INITIAL_STATE = { resources: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case GET_RESOURCES:
			return { ...state, resources: action.payload };
		default:
			return state;
	}
};
