import axios from 'axios';
import { GET_STUDENT_PHOTO } from './types';

export function getStudentPhoto() {
	return function (dispatch) {
			axios({
			method: 'GET',
			url: `/api/student/init?studentEmail=${localStorage.getItem("email")}`,
		})
		.then(function (resp) {
			console.log("resp from student info get", resp)
			dispatch({ type: GET_STUDENT_PHOTO, payload: resp.data });
		});
	};
}

export function postStudentPhoto(selectedFile) {
	return function (dispatch) {
	const self = this;
		const form = new FormData();
		form.append("file", selectedFile);
		form.append("type", "student");
		form.append("email", localStorage.getItem("email"));

		const settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "/api/upload/s3",
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
	        dispatch({ type: GET_STUDENT_PHOTO, payload: resp.picture_url });
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
