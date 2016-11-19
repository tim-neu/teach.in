import SET_USER_TYPE from '../actions/types.js';
const initialState = { userType: '' };
export default function(state = initialState, action) {
	switch (action.type) {
		case SET_USER_TYPE:
			return { ...state, userType: action.payload };
		default:
			return { ...state };
	}
}


