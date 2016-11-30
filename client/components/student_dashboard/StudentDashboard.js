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
	}

	componentWillMount() {
	  if (sessionStorage.getItem('isAuthenticated') === 'false' || !sessionStorage.getItem('isAuthenticated')) {
	    browserHistory.push('/home');
	  }
	}

	render(){
		return (
		  <div className="row">
			  <DashboardNav />
			  <div className="container">
			  <div className="row">
			  	<div className="col-lg-4">
					<StudentInformation studentEmail={this.state.email}/>
				</div>
				<div className="col-lg-8">
					<Calendar teacherEmail={this.state.email}/>
				</div>
			  </div>
			  <StudentClassCards />
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