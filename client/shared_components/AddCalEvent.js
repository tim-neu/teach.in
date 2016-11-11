import React, { Component, PropTypes } from 'react';

export default class AddCalEvent extends Component {
	constructor(props){
		super(props)
	}

  render(){
  	return (
  		<div>
  			<form>
					<input type='text' name='title' placeholder='Event Name' />
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
  	)
  }