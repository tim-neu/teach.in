import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
export const fields = ['studentId', 'name', 'grade', 'assignmentId'];

class AssignmentGradeForm extends Component {
	constructor (props) {
		super(props);
		this.state = {submitting: false };
	}

	changeSubmit() {
		console.log(' i cahnged the state to submitting');
		this.setState({ submitting: true });
		var self = this;
		_.delay(()=>{this.setState({ submitting: false })}, 1000);
	};

	render() {
		const {
			fields: { name, grade, studentId, assignmentId},
			handleSubmit,
			pristine,
			resetForm,
			submitting,
		} = this.props;
		var submit = 'Submit';
		if (this.state.submitting){
			submit = 'Submitting...';
		}
		console.log('submitting is:', submitting);
		return (<form onSubmit={handleSubmit} className="assignment-grade-form">
				<input type='text' placeholder='student' {...name} />

				<input type='text' placeholder='Grade' value='0' {...grade} />

				<input type='text' placeholder='studentId' {...studentId} className='student-id-input'/>
				<input type='text' placeholder='assignmentId' {...assignmentId} className='student-id-input'/>
			<button type='submit' disabled={submitting} onClick={this.changeSubmit.bind(this)}>
			{submit}
			</button>
		</form>
		);
	}
};

export default reduxForm({
  form: 'student',
  fields,
})(AssignmentGradeForm);
