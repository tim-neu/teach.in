//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { createClassEvent } from '../../actions/create_class_action';

class CreateClassEvent extends Component {
	constructor (props) {
		super(props);

		this.state = {name: '', start: '', end: '', date: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (e) {
		console.log(this.props.classId, "******** this.classId ********")
		e.preventDefault();
		// console.log(this,"this this this")
		this.props.createClassEvent(this.state.name,this.state.start,this.state.end,this.state.date,this.props.classId);
	}

	render () {
		console.log('this is props', this.props)
		return (
			<div>
				<form className='eventForm'>
					<input 	
						type='text'
						name='class-name'
						placeholder='Title' 
						value={this.state.name} 
						onChange={nameEvent => this.setState({ name: nameEvent.target.value })}
					/>
					<input 
						type='time'
						name='start-time'
						placeholder='Start Time'
						value={this.state.start} 
						onChange={startEvent => this.setState({ start: startEvent.target.value })}
					/>
					<input
						type='time'
						name='end-time'
						placeholder='End Time'
						value={this.state.end} 
						onChange={endEvent => this.setState({ end: endEvent.target.value })} 
					/>
					<input
						type='date'
						name='class-date'
						value={this.state.date} 
						onChange={date => this.setState({ date: date.target.value })}
					/>
					<div>
					<button onClick={this.handleSubmit}>Submit</button>
					<button>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		classes: state.classEvents.classEvents,
	}
}

var CreateClassContainer = connect(mapStateToProps, { createClassEvent: createClassEvent })(CreateClassEvent);
export default CreateClassContainer;