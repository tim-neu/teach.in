import axios from 'axios';
import { GET_RESOURCES } from './types';

export function getResources(classID) {
	return function (dispatch) {
	axios({
			method: 'GET',
			url: `/api/teacher/classes/class/resources?classId=${classID}`,
		})
		.then(function (resp) {
			console.log('the resp resources:', resp);
			dispatch({ type: GET_RESOURCES, payload: resp.data });
		});
	};
};
