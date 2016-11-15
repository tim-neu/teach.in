import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStudents, addStudent } from '../../actions/students_actions';
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import _ from 'lodash';

class Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.location.query.className,
			foundStudents: [],
			isLoading: false,
			searchStudentText: '',
			students: [],
		};
		var self = this;
		var className = this.state.className;
		this.updateValue = this.updateValue.bind(this);
		this.addStudent = this.addStudent.bind(this);
		this.findStudents = this.findStudents.bind(this);
		this.debouncedFind = _.debounce(this.findStudents, 750);
		this.onChange = this.onChange.bind(this);
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

	render() {
		const studentList = this.props.students.map(function (student, i) {
			return <li key={i}>{student.name}</li>;
		});

		return (
			<div>I'm at classes!
				<Select isLoading={this.state.isLoading} name= "form-field-name" value="one" onValueClick={this.addStudent} options={this.state.foundStudents} onInputChange={this.onChange} onChange={this.addStudent} />
				<h1>{this.state.className}</h1>
				<ul> {studentList} </ul>
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
