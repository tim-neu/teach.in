import { CREATE_CLASS } from '../actions/types.js';

const initialState = { classes: []};

function addClass(prevState, payload) {
	var newClasses = prevState.classes.concat(payload);
	return {
		classes: newClasses,
	}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_CLASS:
			console.log('the payload in calendar_reducer of createclass is:', action.payload);
			return addClass(state, action.payload);
		default:
			return {  ...state};
	}
}