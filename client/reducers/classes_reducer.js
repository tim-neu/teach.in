import { ALL_CLASSES, ADD_CLASS } from '../actions/types';

const INITIAL_STATE = { classes: [] };

function appendClass(prevState, newClass) {
	var prevClasses = prevState.classes;
	var newClasses = prevClasses.concat(newClass);
	return { ...prevState, classes: newClasses };
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case ALL_CLASSES:
			console.log('the payload for getting all classes is:', action.payload);
			return { ...state, classes: action.payload };
		case ADD_CLASS:
			console.log('the payload for adding a class in class reducer is:', action.payload)
			return appendClass(state, action.payload);
		default:
			return state;
	}
};
