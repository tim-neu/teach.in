//Libs
import React, { Component } from 'react';

class CreateClass extends Component {
	constructor (props) {
		super(props);

		this.state = {};
	}

	render () {
		return (
			<div>
				<form>
					<input type='text' name='class-name' placeholder='Class Name' />
					<input type='text' name='start-time' placeholder='Start Time' />
					<input type='text' name='end-time' placeholder='End Time' />
					<input type='checkbox' name='Monday' value='true' />Mon
					<input type='checkbox' name='Tuesday' value='true' />Tue
					<input type='checkbox' name='Wednesday' value='true' />Wed
					<input type='checkbox' name='Thursday' value='true' />Thu
					<input type='checkbox' name='Friday' value='true' />Fri
					<button>Submit</button>
					<button>Cancel</button>
				</form>
			</div>
		);
	}
};

export default CreateClass;