import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/students_actions';

class Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			className: this.props.location.query.className,
			students: [],
		};
		console.log('i got the right name!', this.state.className);
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
			<div>I'm at classes!
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

export default connect(mapStateToProps, { getStudents: getStudents })(Class);
