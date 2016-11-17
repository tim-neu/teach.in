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
			<div>
				<div className="row">
  			  		<DashboardNav />
    	  		</div>

    	  		<div className="container">
    	  			<div className="row">
  						<div className="col-lg-4">
				  			<UserInformation />
  						</div>
  						<div className="col-lg-8">
  							<Calendar />
  						</div>
    	  			</div>
			
  					<div className="row">
  					  <div className="col-lg-4">

  					  </div>
  					  <div className="col-lg-8">
  					  	<Graph />
  					  </div>
    	  			</div>
    	  		</div>
    	  	</div>

			)
		}
	}
  

export default TeacherDashboard