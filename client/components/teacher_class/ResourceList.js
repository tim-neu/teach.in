import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getResources } from '../../actions/resource_actions';

class ResourceList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			classId: this.props.classId
		};
	}

	componentWillMount () {
		this.props.getResources(this.state.classId);
	}

	render () {
		const list = this.props.resources.map(function(resources){
			return <li key={resources.url}><a href={resources.url}>{resources.name}</a></li>
		})
		return (
			<div>
				<div>
					<h4>Resource List</h4>
					<ul>{list}</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		resources: state.resources.resources
	}
}

export default connect(mapStateToProps, { getResources: getResources })(ResourceList); 
