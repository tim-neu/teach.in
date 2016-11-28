import React, { Component } from 'react';
import Calendar from '../../shared_components/Calendar.js';
import DashboardNav from '../../shared_components/dashboard_nav.js';
import StudentInformation from './StudentInformation.js';
import handleMediaSubmit from '../../actions/resource_actions.js';
import StudentResources from './StudentResources';
import StudentClassCards from './Student_ClassCards';

import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class StudentDashboard extends Component {
	constructor(props) {
	super(props);
	this.state = {
		email: localStorage.getItem("email")
	};
	this.handleMediaSubmit = this.handleMediaSubmit.bind(this);
	}

	componentWillMount() {
	  if (sessionStorage.getItem('isAuthenticated') === 'false' || !sessionStorage.getItem('isAuthenticated')) {
	    browserHistory.push('/home');
	  }
	}

	handleMediaSubmit(event){
		event.preventDefault();
		var selectedFile = document.getElementById('input').files[0];
		var fileName = document.getElementById('input').val;
		var form = new FormData();
		form.append("file", selectedFile);
		form.append("teacherEmail", localStorage.getItem("email"));

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "/api/upload/s3",
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
		});
	}

	render(){
		return (
		  <div className="row">
			  <DashboardNav />
			  <div className="container">
			  <div className="row">
			  	<div className="col-lg-4 student-profile">
					<StudentInformation studentEmail={this.state.email}/>
				</div>
				<div className="col-lg-8">
					<div id="calendar-container">
						<Calendar teacherEmail={this.state.email}/>
					</div>
				</div>
			  </div>
			  	<div className='cardContainer'>
			  		<h2 className='componentHeader'>My Classes</h2>
			  		<StudentClassCards />
			  	</div>
			  </div>  
		  </div>
			)
		}
	}
  

function mapStateToProps(state){
  return {
    isAuthenticated: state.isAuthenticated.isAuthenticated,
    userType: state.userType.userType,
  };
};

var StudentDashboardContainer = connect(mapStateToProps)(StudentDashboard);
export default StudentDashboardContainer;