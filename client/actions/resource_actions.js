import axios from 'axios';

export const handleMediaSubmit = (event) => {
	event.preventDefault();
	var selectedFile = document.getElementById('input').files[0];
	var form = new FormData();
	form.append("file", selectedFile);
	form.append("teacherEmail", localStorage.getItem("email"));

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:8000/api/upload/s3",
	  "method": "POST",
	  "name": "name",
	  "headers": {
	    "cache-control": "no-cache",
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}