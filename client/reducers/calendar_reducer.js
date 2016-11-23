import { CREATE_CLASS_EVENT } from '../actions/types.js';

const initialState = { classes: []};

function addClassEvent(prevState, payload) {
	var newClasses = prevState.classes.concat(payload);
	return {
		classes: newClasses,
	}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_CLASS_EVENT:
			console.log('the payload in calendar_reducer of createclass is:', action.payload);
			return addClassEvent(state, action.payload);
		default:
			return {  ...state};
	}
}