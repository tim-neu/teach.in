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
				<div className='col-lg-4 card' key={singleClass.name}>
					<h3 className='componentHeader'>{singleClass.name}</h3>
					<div className='classCard'> Grade: { singleClass.classStudents.grade? <strong>{singleClass.classStudents.grade}</strong> : 'No Grade yet'}</div>
					<div className='classCard'> Your Points: { singleClass.classStudents.points? <strong>{singleClass.classStudents.points}</strong> : 'No Points yet'}</div>
					<div className='classCard'> Total Points: { singleClass.totalPoints? <strong>{singleClass.totalPoints}</strong> : 'No assignments yet' } </div>
					<div className='classCard'> Percent in Class: { singleClass.classStudents.percent? <strong>{singleClass.classStudents.percent}%</strong> : 'No Percent yet'}</div>
					<div className='classCard'> Resources: </div>
					<ul>
						{ singleClass.resources ?
						singleClass.resources.map(function(resource){
							return  <li key={resource.name}> <a href={resource.url}> { resource.name } </a> </li>
						}) :
						'No Resources have been released'
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
