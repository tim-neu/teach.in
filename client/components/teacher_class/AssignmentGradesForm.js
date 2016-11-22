import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
// export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes', 'grade'];
import AssignmentGradeForm from './AssignmentGradeForm';
class AssignmentGradesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], currentAssignment: '', associated: []};
    this.handleChange = this.handleChange.bind(this);
    console.log('this is props:', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.students) {
      this.setState({ students: nextProps.students });
    }

    if (nextProps.currentAssignment) {
      this.setState({ currentAssignment: nextProps.currentAssignment });
    }
  }

  handleChange(val) {
    console.log('this is the state', this.state);
  }

  onSubmit(index) {
    return data => {
      return this.props.onSubmit(data)
        .then(() => {
          const students = this.state.students.slice();
          students[index] = data;
          this.setState({ students });
        });
    };
  }

  render() {
    const { students } = this.state;
    const { handleSubmit } = this.props;
    let gotStudents = this.state.students.length !== 0;
    var studentsMap = null;
    if (gotStudents) {
      studentsMap = students.map((student, index) =>
          <AssignmentGradeForm key={index} formKey={index.toString()} initialValues={student} onSubmit={this.onSubmit(index)} submittingGrade={this.props.submittingGrade} />
        );
    };
    var assignmentName = '';
    if (this.props.currentAssignment) {
      assignmentName = this.props.currentAssignment.name;
    }

    return (<div>
        <div className="assignment-name">
          {assignmentName}
        </div>
        {studentsMap}
      </div>
    );
  }
};

  // render() {
  //   const {
  //     fields: { firstName, lastName, email, sex, favoriteColor, employed, notes, grade },
  //     handleSubmit,
  //     resetForm,
  //     submitting,
  //     } = this.props;

  //     let gotStudents = this.state.students.length !== 0;
  //     let students = null;
  //     if (gotStudents) {
  //       students = <div>
  //                     <label> {this.state.students[0].name} </label>
  //                     <input type='text' placeholder='grade' {...grade} />
  //                   </div>;
  //     }

  //   return (<form onSubmit={handleSubmit}>
  //       {students}
  //       <div>
  //         name
  //         <input type="text" onChange={this.handleChange} />
  //         <div>
  //         {console.log('this is firstname the field:', {...firstName})}
  //           <label>First Name</label>
  //           <input type="text" placeholder="First Name" {...firstName}/>
  //         </div>
  //       </div>
  //       <div>
  //         <div>
  //           <label>Last Name</label>
  //           <input type="text" placeholder="Last Name" {...lastName}/>
  //         </div>
  //       </div>
  //       <div>
  //         <div>
  //           <label>Email</label>
  //           <input type="email" placeholder="Email" {...email}/>
  //         </div>
  //       </div>
  //       <div>
  //         <label>Sex</label>
  //         <div>
  //           <label>
  //             <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
  //           </label>
  //           <label>
  //             <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
  //           </label>
  //         </div>
  //       </div>
  //       <div>
  //         <label>Favorite Color</label>
  //         <div>
  //           <select
  //             {...favoriteColor}
  //             // required syntax for reset form to work
  //             // undefined will not change value to first empty option
  //             // when resetting
  //             value={favoriteColor.value || ''}>
  //             <option></option>
  //             <option value="ff0000">Red</option>
  //             <option value="00ff00">Green</option>
  //             <option value="0000ff">Blue</option>
  //           </select>
  //         </div>
  //       </div>
  //       <div>
  //         <label>
  //           <input type="checkbox" {...employed}/> Employed
  //         </label>
  //       </div>
  //       <div>
  //         <label>Notes</label>
  //         <div>
  //           <textarea
  //             {...notes}
  //             // required for reset form to work (only on textarea's)
  //             // see: https://github.com/facebook/react/issues/2533
  //             value={notes.value || ''}/>
  //         </div>
  //       </div>
  //       <div>
  //         <button type="submit" disabled={submitting}>
  //           {submitting ? <i/> : <i/>} Submit
  //         </button>
  //         <button type="button" disabled={submitting} onClick={resetForm}>
  //           Clear Values
  //         </button>
  //       </div>
  //     </form>
  //   )
  // }
//}

// AssignmentGradesForm.propTypes = {
//   fields: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   resetForm: PropTypes.func.isRequired,
//   submitting: PropTypes.bool.isRequired
// }

// export default reduxForm({
//   form: 'simple',
//   fields
// })(AssignmentGradesForm)

export default AssignmentGradesForm;
