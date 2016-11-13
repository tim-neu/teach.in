import axios from 'axios';
import { ALL_CLASSES } from './types';

export function getClasses() {
	return function (dispatch) {
	axios({
			method: 'GET',
			url: '/api/teacher/classes',
		})
		.then(function (resp) {
			console.log('the resp is:', resp);
			dispatch({ type: ALL_CLASSES, payload: resp.data });
		});
	};
};
