import React, { Component } from 'react';
import Graph from '../../shared_components/graph.js';
import Calendar from '../../shared_components/Calendar.js';
import Classes from '../../components/teacher_classes/Classes';
import DashboardNav from '../../shared_components/dashboard_nav.js';
import UserInformation from '../../shared_components/User_information.js';
import handleMediaSubmit from '../../actions/resource_actions.js';
import CreateClassEvent from '../../components/create_class_event/CreateClassEvent.js';
import AddClass from '../../components/add_class/AddClass.js';

import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class TeacherDashboard extends Component {
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
		});
	}

	render(){
		return (
		  <div className="row">
			  <DashboardNav />
			  <div className="container">
			  	<div className="row top">
			  		<div className="col-lg-4 profile">
						<UserInformation />
					</div>
					<div className="col-lg-8">
						<Calendar teacherEmail={this.state.email}/>
					</div>
			  	</div>
			  	<div className='row top'>
			  		<div className='col-lg-4 classList addClassForm'>
			  			<AddClass />
			  			<Classes />
			  		</div>
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

var TeacherDashboardContainer = connect(mapStateToProps)(TeacherDashboard);
export default TeacherDashboardContainer;
