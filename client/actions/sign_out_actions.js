import { SIGN_OUT_USER } from './types.js';

export function logOut() {
	return function (dispatch) {
		dispatch({ type: SIGN_OUT_USER, payload: true });
	};
}