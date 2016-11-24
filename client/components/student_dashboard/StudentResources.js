import React, {Component} from 'react';
import { connect } from 'react-redux';
import getResources from '../../actions/get_student_resources.js';

class StudentResources extends Component {
	constructor(props) {
	super(props);
	}
	componentDidMount(){
		this.props.getResources(this.props.studentEmail);
		console.log("component will mount", this.props)
	}
	render(){
		return (
			<div>
				<h1>studentResources.name</h1>
			</div>

			)
	}
}

function mapStateToProps(state){

	return{
		studentResources: state.studentResources.studentResources
	}
}

export default connect(mapStateToProps, {getResources: getResources})(StudentResources)