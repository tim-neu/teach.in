//Libs
import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import axios from 'axios';

class CreateClass extends Component {
	constructor (props) {
		super(props);

		this.state = {name: '', startTime: '', endTime: '', date: ''};
	}

	handleSubmit = (e) => {
		axios.post('/api/teacher/classes/class/event', {
					name: this.state.name,
					startTime: this.state.startTime,
					endTime: this.state.endTime,
					date: this.state.date
				})
			  .then(function (response) {
					console.log(response);
  	  	})
  	  	.catch(function (error) {
  	  		console.log(error);
  	  	})
	}

	render () {
		return (
			<div>
				<form>
					<input 	
						type='text'
						name='class-name'
						placeholder='Class Name' 
						value={this.state.name} 
						onChange={nameEvent => this.setState({ name: nameEvent.target.value })}
					/>
					<input 
						type='time'
						name='start-time'
						placeholder='Start Time'
						value={this.state.startTime} 
						onChange={startTimeEvent => this.setState({ startTime: startTimeEvent.target.value })}
					/>
					<input
						type='time'
						name='end-time'
						placeholder='End Time'
						value={this.state.endTime} 
						onChange={endTimeEvent => this.setState({ endTime: endTimeEvent.target.value })} 
					/>
					<input
						type='date'
						name='class-date'
						value={this.state.date} 
						onChange={date => this.setState({ date: date.target.value })}
					/>
					<input type='checkbox' name='Monday' value='true' /> Mon 
					<input type='checkbox' name='Tuesday' value='true' /> Tue 
					<input type='checkbox' name='Wednesday' value='true' /> Wed 
					<input type='checkbox' name='Thursday' value='true' /> Thu 
					<input type='checkbox' name='Friday' value='true' /> Fri 
					<button onClick={this.handleSubmit}>Submit</button>
					<button>Cancel</button>
				</form>
			</div>
		);
	}
};

export default CreateClass;