import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
export const fields = ['studentId', 'name', 'grade', 'assignmentId'];

class AssignmentGradeForm extends Component {
	render() {
		const {
			fields: { name, grade, studentId, assignmentId},
			handleSubmit,
			pristine,
			resetForm,
			submitting,
		} = this.props;
		return (<form onSubmit={handleSubmit} className="assignment-grade-form">
				<input type='text' placeholder='student' {...name} />

				<input type='text' placeholder='Assignment grade' value='0' {...grade} />

				<input type='text' placeholder='studentId' {...studentId} className='student-id-input'/>
				<input type='text' placeholder='assignmentId' {...assignmentId} className='student-id-input'/>
			<button type='submit'>
			Submit
			</button>
		</form>
		);
	}
};

export default reduxForm({
  form: 'student',
  fields,
})(AssignmentGradeForm);
