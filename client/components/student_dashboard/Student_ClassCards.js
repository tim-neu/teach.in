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
		let studentClassList = this.props.studentClasses? this.props.studentClasses.map(function(singleClass){
			return <div key={singleClass.name}> <h1>{singleClass.name}</h1> 
			<ul>

			</ul></div> 
		}) : null ;

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
