import { SET_USER_TYPE } from './types';

export function setUserType(userType) {
	return function (dispatch) {
		console.log('the payload in sign in action should set the user type as:', userType);
		dispatch({ type: SET_USER_TYPE, payload: userType });
	};
};
