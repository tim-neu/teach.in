import { ALL_CLASSES } from '../actions/types';

const INITIAL_STATE = { classes: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case ALL_CLASSES:
			console.log('the payload is:', action.payload);
			return { ...state, classes: action.payload };
		default:
			return state;
	}
};
