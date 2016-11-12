//Libs
import React, { Component } from 'react';
import axios from 'axios';

class AssignmentForm extends Component {
	constructor (props) {
		super(props);

		this.state = {name: '', classId: '', type: '', dueDate: '', grade: '0'};
	}

	handleSubmitAssignment = (e) => {
		axios.post('/api/assignments', {
					name: this.state.assignment,
					classId: this.state.classId,
					type: this.state.type,
					dueDate: this.state.date,
					grade: this.state.grade
				})
			  .then(function (response) {
					console.log('this is the handleSubmitAssignment response:',response);
  			})
  	  	.catch(function (error) {
  	  		console.log(error);
  	  	})
	}

	render () {
		return (
			<div className='assignmentForm'>
				<form>
					<h4>Create Assignment Form</h4>
					<div>
						<input
							type='text'
							name='assignment-name'
							placeholder='Assignment Name' 
							value={this.state.assignment} 
							onChange={assignmentName => this.setState({ name: assignmentName.target.value })}
						/>
					</div>
					<div>
						<input
							type='text'
							name='classId'
							placeholder='Class Id'
							value={this.state.classId}
							onChange={assignmentClassId => this.setState({ classId: assignmentClassId.target.value })}
						/>
					</div>
					<div>
						<input
							type='text'
							name='assignment-type'
							placeholder='Test, Quiz, or Homework'
							value={this.state.type} 
							onChange={assignmentType => this.setState({ type: assignmentType.target.value })} 
						/>
					</div>
					<div>
						<input 
							type='date'
							name='assignment-dueDate'
							placeholder='Due Date'
							value={this.state.dueDate} 
							onChange={assignmentDueDate => this.setState({ dueDate: assignmentDueDate.target.value })}
						/>
					</div>
					<div>
						<button className="btn" onClick={this.handleSubmitAssignment}>Submit</button>
						<button className="btn" >Cancel</button>
					</div>
				</form>
			</div>
		);
	}
};

export default AssignmentForm;