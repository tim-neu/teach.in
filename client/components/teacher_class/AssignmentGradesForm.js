import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import AssignmentGradeForm from './AssignmentGradeForm';
import _ from 'lodash'
class AssignmentGradesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], currentAssignment: '', associated: []};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.students) {
      this.setState({ students: nextProps.students });
    }

    if (nextProps.currentAssignment) {
      this.setState({ currentAssignment: nextProps.currentAssignment });
    }
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
      this.state.students.forEach(function(student){
        if (student.grade === null) {
          student.grade = '';
        }
      });
      studentsMap = this.state.students.map((student, index) =>
          <AssignmentGradeForm key={index} formKey={index.toString()} initialValues={student} onSubmit={this.onSubmit(index)} submittingGrade={this.props.submittingGrade} />
        );
    };
    var assignmentName = '';
    if (this.props.currentAssignment) {
      assignmentName = this.props.currentAssignment.name;
    }

    return (<div>
        <div>
          <h3 className='componentHeader'>Grades for {assignmentName}</h3> 
        </div>
        {studentsMap}
      </div>
    );
  }
};

export default AssignmentGradesForm;
