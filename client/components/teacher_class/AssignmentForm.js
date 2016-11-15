//Libs
import React, { Component } from 'react';
import axios from 'axios';

class AssignmentForm extends Component {
	constructor (props) {
		super(props);

		this.state = {name: '', classId: '', type: '', dueDate: '', grade: '0'};
	}

	handleSubmitAssignment = (e) => {
		e.preventDefault();
		console.log(this.props.classTitle,"class title")
		axios.post('/api/teacher/classes/class/assignment', {
					name: this.state.name,
					className: this.props.classTitle,
					type: this.state.type,
					dueDate: this.state.date,
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
				<h4>Create Assignment</h4>
				<form>
					<div>
						<input
							type='text'
							name='assignment-name'
							placeholder='Assignment Name' 
							value={this.state.name} 
							onChange={assignmentName => this.setState({ name: assignmentName.target.value })}
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