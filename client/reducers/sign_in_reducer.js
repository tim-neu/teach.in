import SET_USER_TYPE from '../actions/types.js';
import CHECK_AUTHENTICATION from '../actions/types';
const initialState = { userType: '' };
export default function(state = initialState, action) {
	switch (action.type) {
		case SET_USER_TYPE:
			console.log('i entered SET_USER TYPE INSTEAD OF CHECK AUTH in sign in reducser and the action is:', action);
			return { ...state, userType: action.payload };
		case CHECK_AUTHENTICATION:
			console.log('i entered CHECK_AUTHENTICATION in sign in reducser and the action is:', action);
			return { ...state, isAuthenticated: action.payload };
		default:
			return { ...state };
	}
}


