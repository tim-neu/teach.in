import { SET_USER_TYPE } from './types';
import { CHECK_AUTHENTICATION } from './types';
import axios from 'axios';

export function setUserType(userType) {
	return function (dispatch) {
		console.log('the payload in sign in action should set the user type as:', userType);
		dispatch({ type: SET_USER_TYPE, payload: userType });
	};
};

export function setUserEmail(userEmail) {

};

export function logOut(userType) {
	if (userType === 'student'){
		return function (dispatch) {
			axios({
				method: 'GET',
				url: '/api/student/signout',
			}).then(function (data) {
				console.log('the logout is succesful from the axios call in sign in actions:', data);
			});
			dispatch({ type: SIGN_OUT_USER, payload: false });
		};
	} else {
		return function (dispatch) {
			axios({
				method: 'GET',
				url: '/api/teacher/signout',
			}).then(function (data) {
				console.log('the logout is succesful from the axios call in sign in actions:', data);
			});

			dispatch({ type: SIGN_OUT_USER, payload: false });
		};
	}
};

export function checkAuthentication(authenticated) {
	return function (dispatch) {
		console.log('i should be authenticated and setting the payload to be true:', authenticated);
		dispatch({ type: CHECK_AUTHENTICATION, payload: authenticated });
	};
};
