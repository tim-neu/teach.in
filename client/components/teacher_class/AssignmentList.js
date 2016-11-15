import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAssignments} from '../../actions/assignment_actions';

class AssignmentList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			assignments: []
		}
	}

	componentWillMount () {
		console.log('inside')
	}

	render () {
		const testAssignments = ['Chapter 1 HW', 'Chapter 2 HW', 'Chapter 3 HW', 'Quiz 1', 'Chapter 4 HW', 'Test 1'];
		const list = testAssignments.map(function(assignment, i){
			return <li key={i}>{assignment}</li>
		})

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
		assignments: state.assignments.assignments
	}
}

export default connect(mapStateToProps, {getAssignments: getAssignments})(AssignmentList); 
