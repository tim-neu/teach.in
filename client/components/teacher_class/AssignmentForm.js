import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {handleSubmitAssignment} from '../../actions/assignment_actions';

class AssignmentForm extends Component {
	constructor (props) {
		super(props);
		this.state = {name: '', classId: '', type: '', dueDate: '', grade: 0};
		this.handleSubmitAssignment = this.handleSubmitAssignment.bind(this);
	}

	handleSubmitAssignment(event){
		self = this;
		event.preventDefault();
		self.props.handleSubmitAssignment(self.state.name, self.props.classTitle, self.state.type, self.state.date, self.state.maxPoints);
	}

	render () {
		return (
			<div className='assignmentForm'>
				<form>
					<div>
						<p className='labelForm'>Assignment Title:</p>
						<input
							type='text'
							name='assignment-name'
							placeholder='Title' 
							value={this.state.name} 
							onChange={assignmentName => this.setState({ name: assignmentName.target.value })}
						/>
					</div>
					<div>
						<p className='labelForm'>Assignment Type:</p>
						<input
							type='text'
							name='assignment-type'
							placeholder='Test, Quiz, or Homework'
							value={this.state.type} 
							onChange={assignmentType => this.setState({ type: assignmentType.target.value })} 
						/>
					</div>
					<div>
						<p className='labelForm'>Due Date:</p>
						<input 
							type='date'
							name='assignment-dueDate'
							placeholder='Due Date'
							value={this.state.dueDate} 
							onChange={assignmentDueDate => this.setState({ dueDate: assignmentDueDate.target.value })}
						/>
						<p className='labelForm'>Total Points:</p>
						<input 
							type='number'
							name='assignment-maxPoints'
							placeholder='Max Points'
							value={this.state.maxPoints} 
							onChange={assignmentMaxPoints => this.setState({ maxPoints: assignmentMaxPoints.target.value })}
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