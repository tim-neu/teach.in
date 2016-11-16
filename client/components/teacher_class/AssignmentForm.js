import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {handleSubmitAssignment} from '../../actions/assignment_actions';

class AssignmentForm extends Component {
	constructor (props) {
		super(props);
		this.state = {name: '', classId: '', type: '', dueDate: '', grade: '0'};
		this.handleSubmitAssignment = this.handleSubmitAssignment.bind(this);
	}

	handleSubmitAssignment(event){
		self = this;
		console.log(self.props, "self.props")
		event.preventDefault();
		self.props.handleSubmitAssignment(self.state.name, self.props.classTitle, self.state.type, self.state.date);
	}

	render () {
		console.log(this.props, "I FUCKED A HORSE")
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

function mapStateToProps(state) {
	return {
		assignments: state.assignments.assignments
	}
}

export default connect(mapStateToProps, {handleSubmitAssignment: handleSubmitAssignment})(AssignmentForm); 