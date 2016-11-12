import React, { Component } from 'react';
import axios from 'axios';
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
		axios({
			method: 'GET',
			url: '/api/teacher/classes/class',
			params: {
				className: className
			}
		})
		.then(function(resp){
			console.log('the resp is:', resp);
			self.setState({ students: resp.data });
		});
	}

	render() {
		const studentList = this.state.students.map(function(student,i) {
			return <li key={i}>{student.name}</li>
		})
		return (
			<div>I'm at classes!
				<h1>{this.state.className}</h1>
				<ul> {studentList} </ul>
			</div> 
			);

	}
}

export default Class;