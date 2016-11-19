import { SET_USER_TYPE } from './types';
import { CHECK_AUTHENTICATION } from './types';

export function setUserType(userType) {
	return function (dispatch) {
		console.log('the payload in sign in action should set the user type as:', userType);
		dispatch({ type: SET_USER_TYPE, payload: userType });
	};
};

export function setUserEmail(userEmail) {

};

export function checkAuthentication(authenticated) {
	return function (dispatch) {
		console.log('the paylod in check authentication is:', authenticated);
		dispatch({ type: CHECK_AUTHENTICATION, payload: authenticated });
	};
};
