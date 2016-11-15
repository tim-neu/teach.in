import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAssignments, selectAssignment} from '../../actions/assignment_actions';

class AssignmentList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			assignments: [],
			classId: this.props.classId
		}
		// this.props.assignments(this.props.classId);
		this.selectAssignment = this.props.selectAssignment.bind(this)
	}

	componentWillMount () {
		this.props.getAssignments(this.state.classId);
	}

	render () {
		self = this;
		console.log(this.props,"currentAssignment")
		const list = this.props.assignments.map(function(assignment, i){
			return <li onClick={() => self.selectAssignment(assignment)}
						key={i}>{assignment.name}</li>
		})
		console.log("assignment props", this.props.classId)
		return (
			<div>
				<div>
					<h4>Assignment List</h4>
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

export default connect(mapStateToProps, {getAssignments: getAssignments, selectAssignment: selectAssignment})(AssignmentList); 
