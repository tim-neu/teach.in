import axios from 'axios';
import { GET_TEACHER_PHOTO } from './types';

export function getTeacherPhoto() {
	return function (dispatch) {
			axios({
			method: 'GET',
			url: `/api/teacher?teacherEmail=${localStorage.getItem("email")}`,
		})
		.then(function (resp) {
			dispatch({ type: GET_TEACHER_PHOTO, payload: resp.data.picture });
		});
	};
}

export function postTeacherPhoto(selectedFile) {
	return function (dispatch) {
	const self = this;
		const form = new FormData();
		form.append("file", selectedFile);
		form.append("type", "teacher");
		form.append("email", localStorage.getItem("email"));

		const settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://localhost:8000/api/upload/s3",
		  "method": "POST",
		  "dataType": "json",
		  "headers": {
		    "cache-control": "no-cache",
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": form,
		  success: function (resp) {
		  	console.log(resp);
	        dispatch({ type: GET_TEACHER_PHOTO, payload: resp.picture });
	      },
	      error: function (error) {
	        console.log(error)
	      },
		};

		$.ajax(settings)
	}
		// .then(function (resp) {
		// 	console.log('the teacher picture post reply is:', resp);
		// });
	};
