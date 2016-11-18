import React, {Component} from 'react';
import Graph from '../../shared_components/graph.js';
import Calendar from '../../shared_components/Calendar.js';
import DashboardNav from '../../shared_components/dashboard_nav.js';
import UserInformation from '../../shared_components/User_information.js';

class TeacherDashboard extends Component {
	constructor(props) {
	super(props);
	this.state = {
		email: localStorage.getItem("email")
	};
	this.handleMediaSubmit = this.handleMediaSubmit.bind(this);
	}

	handleMediaSubmit(event){
		event.preventDefault();
		var selectedFile = document.getElementById('input').files[0];
		var fileName = document.getElementById('input').val;
		var form = new FormData();
		form.append("file", selectedFile);
		form.append("name", "name");

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://localhost:8000/api/upload/s3",
		  "method": "POST",
		  "headers": {
		    "cache-control": "no-cache",
		    "postman-token": "7a00bd2b-8cce-5d41-ab1e-fbf0d23ef3a1"
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

	render(){
		console.log(this.state, "state");
		return (
		  <div className="row">
			  <DashboardNav />
			  <div className="container">
			  <div className="row">
			  	<div className="col-lg-4">
					<UserInformation />
						<form onSubmit={this.handleMediaSubmit}>
						  <a href="https://s3.amazonaws.com/teach.in123454321/Screen+Shot+2016-10-05+at+8.00.50+AM.png">hey</a>
						  <input id="nameValue" type="text" />
						  <input id="input" type="file" name="pic" accept="image/*" />
						  <input type="submit" />
						</form>
		              <div>Try dropping some files here, or click to select files to upload.</div>
				</div>
				<div className="col-lg-8">
					<Calendar />
					<Graph />
				</div>
			  </div>
			  </div>
		  </div>
			)
		}
	}
  

export default TeacherDashboard