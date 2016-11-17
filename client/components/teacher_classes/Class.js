import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStudents, addStudent } from '../../actions/students_actions';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import _ from 'lodash';

import DashboardNav from '../../shared_components/dashboard_nav.js';
import AssignmentForm from '../teacher_class/AssignmentForm';
import AssignmentList from '../teacher_class/AssignmentList';
import Calendar from '../../shared_components/Calendar.js';

class Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.location.query.className,
			foundStudents: [],
			isLoading: false,
			searchStudentText: '',
			students: [],
			classId: this.props.location.query.classId
		};
		var self = this;
		var className = this.state.className;
		this.updateValue = this.updateValue.bind(this);
		this.addStudent = this.addStudent.bind(this);
		this.findStudents = this.findStudents.bind(this);
		this.debouncedFind = _.debounce(this.findStudents, 750);
		this.onChange = this.onChange.bind(this);
		this.handleMediaSubmit = this.handleMediaSubmit.bind(this);
	}

	componentWillMount () {
		this.props.getStudents(this.state.className);
	}

	updateValue (val) {
		this.setState({
			searchStudentText: val,
		});
		console.log('i changed the searchStudentText:', this.state.searchStudentText);
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
		console.log(this.state.className)
		this.setState({
			searchStudentText: val,
		});
		console.log('i changed the searchStudentText:', this.state.searchStudentText);
		this.debouncedFind(false);
	}

	addStudent(student) {
		var self = this;
		this.props.addStudent(student, self.state.className);
		// var self = this;
		// axios({
		// 	method: 'POST',
		// 	url: '/api/teacher/classes/class/student',
		// 	data: {
		// 		student: student,
		// 		email: student.value,
		// 		className: self.state.className,
		// 	},
		// }).then(function (result) {
		// 	console.log('the result is:', result.data);
		// 	self.setState((prevState, props) => {
		// 		var prevStudents = prevState.students;
		// 		return {
		// 			students: prevStudents.concat(result.data),
		// 		};
		// 	});
		// 	console.log('the state for students is:', self.state.students);
		// });
	}
	handleMediaSubmit(event){
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
		  console.log(response);
		});
	}

	render() {
		const studentList = this.props.students.map(function (student, i) {
			return <li key={i}>{student.name}</li>;
		});

		return (
			<div>
  		  <div className="row">
  			  <DashboardNav />
    	  </div>

    	  <div className="container">

    	  	<div className="row">
  				  <div className="col-lg-4">
  				  			<Select isLoading={this.state.isLoading} name= "form-field-name" value="one" onValueClick={this.addStudent} options={this.state.foundStudents} onInputChange={this.onChange} onChange={this.addStudent} />

							<h4>{this.state.className} Roster</h4>
							<ul> {studentList} </ul>
  				  </div>
  				  <div className="col-lg-8">
  				  		<form onSubmit={this.handleMediaSubmit}>
						  <a href="https://s3.amazonaws.com/teach.in123454321/Screen+Shot+2016-10-05+at+8.00.50+AM.png">hey</a>
						  <input id="nameValue" type="text" />
						  <input id="input" type="file" name="pic" accept="image/*" />
						  <input type="submit" />
						</form>
  				  </div>
    	  	</div>
		
  				<div className="row">
  				  <div className="col-lg-4">
							<AssignmentForm classTitle={this.state.className}/>
							<AssignmentList classId={this.state.classId}/>
  				  </div>
  				  <div className="col-lg-8">
  				  	<h4>Grading coming soon... :( </h4>
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

export default connect(mapStateToProps, { getStudents: getStudents, addStudent: addStudent })(Class);
