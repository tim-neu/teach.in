import React, {Component} from 'react';
import { connect } from 'react-redux';
import getResources from '../../actions/get_student_resources.js';

class StudentResources extends Component {
	constructor(props) {
	super(props);
	}
	componentDidMount(){
		this.props.getResources(this.props.studentEmail);
	}
	render(){
		let studentResourceList = this.props.studentResources.map(function(singleClass){
			return <div key={singleClass.name}> <h1>{singleClass.name}</h1> 
			<ul>
				{singleClass.resources.map(function(singleResource){
					return <li><a href={singleResource.url}>{singleResource.name}</a></li>
					}	
				)}
			</ul></div>
		});
		return (
			<div>
				{studentResourceList}
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