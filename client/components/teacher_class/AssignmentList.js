import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAssignments, selectAssignment, getAssignmentsStudents } from '../../actions/assignment_actions';

class AssignmentList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			assignments: [],
			classId: this.props.classId,
			classTitle: this.props.classTitle,
		};
		this.selectAssignment = this.props.selectAssignment.bind(this);
		this.getAssignmentsStudents = this.props.getAssignmentsStudents.bind(this);
	}

	componentWillMount () {
		this.props.getAssignments(this.state.classId);
	}

	render () {
		self = this;
		const list = this.props.assignments.map(function(assignment, i){
			return <li onClick={
				() => {self.selectAssignment(assignment); self.getAssignmentsStudents(self.state.classTitle, assignment.name, self.state.classId)}}
						key={i}>{assignment.name}</li>
		})
		return (
			<div>
				<div>
					<ul>{list}</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		assignments: state.assignments.assignments,
		currentAssignment: state.currentAssignment.currentAssignment
	}
}

export default connect(mapStateToProps, { getAssignments: getAssignments, selectAssignment: selectAssignment, getAssignmentsStudents: getAssignmentsStudents })(AssignmentList); 
