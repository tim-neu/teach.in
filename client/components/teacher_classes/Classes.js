//Libs
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
class Classes extends Component {
	constructor (props) {
		super(props);

		this.state = { classes: [] };
		var self = this;
		axios({
			method: 'GET',
			url: '/api/teacher/classes'
		})
		.then(function(resp){
			console.log('the resp is:', resp);
			self.setState({ classes: resp.data });
		});
	}

	componentWillMount() {
	}
 
	render () {
		console.log('this is state classes', this.state.classes);
		// const classList = this.state.classes.map((Class,i) => {
		// 	return <Link to={`/class/:${Class.name}`} key={i}><li> {Class.name} </li> </Link> 
		// });

		const classList = this.state.classes.map((Class,i) => {
			return <Link to={{ pathname: '/class', query:{className: Class.name} }} key={i}><li> {Class.name} </li> </Link> 
		});

		return (
			<div> Classes
				<ul> {classList} </ul>
			</div>
		);
	}
}

export default Classes;