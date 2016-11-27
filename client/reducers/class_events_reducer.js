import { GET_CLASS_EVENTS, CREATE_CLASS_EVENT  } from '../actions/types';

const INITIAL_STATE = { classEvents: [] };

function appendedClassEvents(prevState, addedClass) {
	_.update(addedClass, 'start', function (s){
		return new Date(s);
	});

	_.update(addedClass, 'end', function (e) {
		return new Date(e);
	});
	console.log('the new added class is:', addedClass);
	var oldClassEvents = prevState.classEvents;
	var newClassEvents = prevState.classEvents.concat(addedClass);
	return { ...prevState, classEvents: newClassEvents };
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type){
		case GET_CLASS_EVENTS:
			return { ...state, classEvents: action.payload };
		case CREATE_CLASS_EVENT:
			console.log('the payloaod in add class event should be an object with end, start title:', action.payload);
			return appendedClassEvents(state, action.payload );
		default:
			return state;
	}
};