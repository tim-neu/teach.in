import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStudents, addStudent } from '../../actions/students_actions';
import { getResources } from '../../actions/resource_actions';
import { browserHistory } from 'react-router';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import _ from 'lodash';

import DashboardNav from '../../shared_components/dashboard_nav.js';
import AssignmentForm from '../teacher_class/AssignmentForm';
import AssignmentList from '../teacher_class/AssignmentList';
import Calendar from '../../shared_components/Calendar.js';
import ClassCalendar from '../teacher_class/ClassCalendar.js';
import AssignmentGradesForm from '../teacher_class/AssignmentGradesForm';
import ResourceList from '../teacher_class/ResourceList';
import PointsChart from './classPointsChart.js';
import CreateClassEvent from '../../components/create_class_event/CreateClassEvent.js';


class Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.location.query.className,
			foundStudents: [],
			isLoading: false,
			searchStudentText: '',
			students: [],
			classId: this.props.location.query.classId,
			submittingGrade: false,
		};
		var self = this;
		var className = this.state.className;
		this.updateValue = this.updateValue.bind(this);
		this.addStudent = this.addStudent.bind(this);
		this.findStudents = this.findStudents.bind(this);
		this.debouncedFind = _.debounce(this.findStudents, 750);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleMediaSubmit = this.handleMediaSubmit.bind(this);
		this.getResources = this.props.getResources.bind(this);
	}

	componentWillMount  () {
	  this.props.getStudents(this.state.className);
	  if (sessionStorage.getItem('isAuthenticated') === 'false' || !sessionStorage.getItem('isAuthenticated')) {
	    browserHistory.push('/home');
	  }
	}

	updateValue (val) {
		this.setState({
			searchStudentText: val,
		});
	}

	findStudents () {
		var self = this;
		this.setState({
			isLoading: true,
		});
		axios({
			method: 'GET',
			url: '/api/student',
			params: {
				student: self.state.searchStudentText,
				class: self.state.className,
			},
		})
		.then(function (resp) {
			self.setState({
				foundStudents: resp.data,
			});
			self.setState({
				isLoading: false,
			});
		});
	}

	onChange(val) {
		this.setState({
			searchStudentText: val,
		});
		this.debouncedFind(false);
	}

	addStudent(student) {
		var self = this;
		this.props.addStudent(student, self.state.className);
	}

	onSubmit(values) {
		var self = this;
		self.setState({ submittingGrade: true});
		axios({
			method: 'PUT',
			url: '/api/teacher/classes/class/assignment/student',
			data: {
				classId: self.state.classId,
				studentId: values.studentId,
				assignmentId: values.assignmentId,
				grade: values.grade,
			}
		})
		.then(function(resp){
			self.setState({ submittingGrade: false });
		})
	}
	handleMediaSubmit(event){
		var self = this;
		event.preventDefault();
		var selectedFile = document.getElementById('input').files[0];
		var fileName = document.getElementById('input').val;
		var form = new FormData();
		form.append("file", selectedFile);
		form.append("classId", this.state.classId);

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
		  self.props.getResources(self.state.classId);
		});
	}

	render() {
		const studentList = this.props.students.map(function (student, i) {
			return <li key={i}><img src={student.picture_url} height="42" width="42" />{student.name}</li>;
		});


		return (
			<div>
  		  <div className="row">
  			  <DashboardNav />
    	  </div>

    	  <div className="container">

    	  	<div className="row top">
  				  <div className="col-lg-4">
  				  		<div className='studentList'>
							<p className='componentHeader'>{this.state.className} Roster</p>
  				  			<Select isLoading={this.state.isLoading} name= "form-field-name" value="one" onValueClick={this.addStudent} options={this.state.foundStudents} onInputChange={this.onChange} onChange={this.addStudent} />
							<ul> {studentList} </ul>
						</div>
  				  </div>
  				  <div className="row">
  				  	<div className="col-lg-8">
  				  		<ClassCalendar classId={this.props.location.query.classId}/>
  				  		<CreateClassEvent classId={this.props.location.query.classId}/>
  				  	</div>
  				  </div>
  				  <div className='row'>
  				  	<div className="col-lg-4">
  				  	</div>
  				  	<div className="col-lg-4">
  				  		<form onSubmit={this.handleMediaSubmit}>
							<a href="https://s3.amazonaws.com/teach.in123454321/Screen+Shot+2016-10-05+at+8.00.50+AM.png">hey</a>
							<input id="nameValue" type="text" />
							<input id="input" type="file" name="pic" accept="image/*" />
							<input type="submit" />
						</form>
						<ResourceList classId={this.state.classId} classTitle={this.state.className}/>
  				  	</div>
  				  	<div className="col-lg-4">
  				  		<PointsChart classId={this.state.classId}/>
  				  	</div>
  				  </div>
    	  	</div>
		
  				<div className="row">
  				  <div className="col-lg-4">
							<AssignmentForm classTitle={this.state.className}/>
							<AssignmentList classId={this.state.classId} classTitle={this.state.className}/>
  				  </div>
  				  <div className="col-lg-8">
  				  	<h4>Grades</h4>
				  	<AssignmentGradesForm currentAssignment={this.props.currentAssignment} associated={this.props.currentAssociatedStudents} students={this.props.currentAssociatedStudents} submittingGrade={this.state.submittingGrade} classTitle={this.state.className} onSubmit={this.onSubmit}/>
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
		currentAssignment: state.currentAssignment.currentAssignment,
		currentAssociatedStudents: state.currentAssignment.assignmentStudents,
		form: state.form,
		resources: state.resources.resources,
		isAuthenticated: state.isAuthenticated.isAuthenticated,
	};
}

export default connect(mapStateToProps, { getStudents: getStudents, addStudent: addStudent, getResources: getResources })(Class);
