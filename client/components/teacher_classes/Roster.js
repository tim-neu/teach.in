//Libs
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Roster extends Component {
	constructor (props) {
		super(props);

		this.state = {};
	}


	render () {
		function RosterList(props) {
  		const students = ['name1', 'name2'];
  		const rosterItems = students.map((student) =>
    		<li>{student}</li>
  		});
		return (
			<div>
				<h3>Roster</h3>
				<ul>
					{rosterItems}
				</ul>
			</div>
		);
	}
};

export default Roster;