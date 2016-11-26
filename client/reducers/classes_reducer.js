import { ALL_CLASSES, ADD_CLASS } from '../actions/types';

const INITIAL_STATE = { classes: [] };

function appendClass(state, Class){
	console.log('the state befire is: ', state);
	state.classes.push(Class);
	console.log('the state after is: ', state);
	var classArrayObj = state.classes;
	return classArrayObj;
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case ALL_CLASSES:
			console.log('the payload for getting all classes is:', action.payload);
			return { ...state, classes: action.payload };
		case ADD_CLASS:
			console.log('the payload for adding a class in class reducer is:', action.payload)
			return { ...state, classes: appendClass(state, action.payload)};
		default:
			return state;
	}
};
