import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/students_actions';

import DashboardNav from '../../shared_components/dashboard_nav.js';
import AssignmentForm from '../teacher_class/AssignmentForm';
import AssignmentList from '../teacher_class/AssignmentList';
import Calendar from '../../shared_components/Calendar.js';

class Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.location.query.className,
			students: [],
			classId: this.props.location.query.classId
		};
		console.log('i got the right name!', this.state.classId);
		var self = this;
		var className = this.state.className;
	}

	componentWillMount () {
		console.log('this.state.classname is:', this.state.className);
		this.props.getStudents(this.state.className);
	}

	render() {
		const studentList = this.props.students.map(function (student, i) {
			return <li key={i}>{student.name}</li>
		});

		return (
			<div>
  		  <div className="row">
  			  <DashboardNav />
    	  </div>

    	  <div className="container">
    	  	<div className="row">
  				  <div className="col-lg-4">
							<h4>{this.state.className} Roster</h4>
							<ul> {studentList} </ul>
  				  </div>
  				  <div className="col-lg-8">
  				  	<Calendar />
  				  </div>
    	  	</div>
		
  				<div className="row">
  				  <div className="col-lg-4">
							<AssignmentForm classTitle={this.state.className}/>
							<AssignmentList classId={this.state.classId}/>
  				  </div>
  				  <div className="col-lg-8">
  				  	<h4>Click to edit form goes here</h4>
  				  </div>
    	  	</div>
    	  </div>
    	</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		students: state.students.students,
	};
}

export default connect(mapStateToProps, { getStudents: getStudents })(Class);
