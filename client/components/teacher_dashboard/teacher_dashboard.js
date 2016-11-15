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
	}
	render(){
		console.log(this.state, "state");
		return (
		  <div className="row">
			  <DashboardNav />
			  <UserInformation />
			  <Graph />
			  <Calendar />
		  </div>

			)
		}
	n}
  

export default TeacherDashboard