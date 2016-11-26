//Libs
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import { getStudents } from '../../actions/students_actions';
import { getClasses } from '../../actions/classes_actions';

class Classes extends Component {
	constructor (props) {
		super(props);
	}

	componentWillMount() {
		this.props.getClasses();
	}

	render () {
		const classList = this.props.classes.map((Class, i) => {
			return <Link to={{ pathname: '/class', query: { className: Class.name, classId: Class.id }}}><li key={i}> {Class.name} </li> </Link> 
		});

		return (
			<div> Classes
				<ul> {classList} </ul>
			</div>
		);
	}
};

function mapStateToProps(state, action) {
	return {
		classes: state.classes.classes
	};
};

const ClassesContainer = connect(mapStateToProps, { getClasses: getClasses, getStudents: getStudents})(Classes);

export default ClassesContainer;
