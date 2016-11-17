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
		return (<form onSubmit={handleSubmit}>
			<div>
				<input type='text' placeholder='student' {...name} />
			</div>
			<div>
				<input type='text' placeholder='Assignment grade' value='0' {...grade} />
			</div>
			<div>
				<input type='text' placeholder='studentId' {...studentId} className='student-id-input'/>
			</div>
			<div>
				<input type='text' placeholder='assignmentId' {...assignmentId} className='student-id-input'/>
			</div>
			<button type='submit'>
			Submit
			</button>
			<button type='button'onClick={resetForm}>
			Cancel
			</button>
		</form>
		);
	}
};

export default reduxForm({
  form: 'student',
  fields,
})(AssignmentGradeForm);
