import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getStudentClasses } from '../../actions/classes_actions';

class StudentClassCards extends Component {
	constructor(props) {
	super(props);
	}

	componentDidMount() {
		this.props.getStudentClasses(this.props.studentEmail);
	}

	render() {

		let studentClassList = this.props.studentClasses ?
		this.props.studentClasses.map(function (singleClass) {
			return (
				<div key={singleClass.name}>
					<h1>{singleClass.name}</h1>
					<div> Grade: { singleClass.classStudents.grade? singleClass.classStudents.grade : 'No Grade yet'}</div>
					<div> Your Points : { singleClass.classStudents.points? singleClass.classStudents.points : 'No Points yet'}</div>
					<div> Total Points: { singleClass.totalPoints? singleClass.totalPoints : 'No assignments yet' } </div>
					<div> Percent in Class : { singleClass.classStudents.percent? singleClass.classStudents.percent : 'No Percent yet'}</div>
					<ul>
						{ singleClass.resources ?
						singleClass.resources.map(function(resource){
							return  <li key={resource.name}> <a href={resource.url}> { resource.name } </a> </li>
						}) :
						null
						}
					</ul>
				</div>
			)
		}) :
		null;

		return (
			<div>
				{studentClassList}
			</div>
			);
	}
}

function mapStateToProps(state){

	return {
		studentClasses: state.studentResources.studentClasses,
	};
}

export default connect(mapStateToProps, { getStudentClasses: getStudentClasses })(StudentClassCards);
