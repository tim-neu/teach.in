//Libs
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class CreateClass extends Component {
	constructor (props) {
		super(props);

		this.state = {};
	}

	render () {
		return (
			<div className='text-center'>
				<form>
					<input type='text' name='class-name' placeholder='Class Name'></input>
					<input type='text' name='start-time' placeholder='Start Time'></input>
					<input type='text' name='end-time' placeholder='End Time'></input>
					<input type='checkbox' name='Monday' value='true'>Mon</input>
					<input type='checkbox' name='Tuesday' value='true'>Tue</input>
					<input type='checkbox' name='Wednesday' value='true'>Wed</input>
					<input type='checkbox' name='Thursday' value='true'>Thu</input>
					<input type='checkbox' name='Friday' value='true'>Fri</input>
					<button>Submit</button>
					<button>Cancel</button>
				</form>
			</div>
		);
	}
}

export default CreateClass;