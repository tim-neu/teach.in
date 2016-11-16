import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm} from 'redux-form';
import { getStudents } from '../../actions/students_actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
    <label>{label}</label>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


// class renderMembers extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       fields: [],
//       students: []
//     }
//   }

//   compomentWillReceiveProps(nextProps){
//     if(nextProps.fields.length !== this.state.fields.length){
//       var map = nextProps.fields.map((student, index) =>
//         <li key={index}>
//           <h4>student #{index + 1}</h4>
//           <Field
//             name={`${student}.firstName`}
//             type="text"
//             component={renderField}
//             label="Grade"/>
//         </li>
//       ) 
//       this.setState({
//         fields: map
//       })
//     }
//   }

//   render() {
//     return (
//       <ul>
//         <li>
//           <button type="button" onClick={() => props.fields.push({})}>Add Member</button>
//           {props.touched && props.error && <span>{props.error}</span>}
//         </li>
//         {map}
//       </ul>
//     )
//   }
// }

const renderMembers = (props) => {
  console.log('------------------------------->', props.students);
  console.log('------------------------------->', props.fields);
  var map = props.fields.map((student, index) =>
      <li key={index}>
        <h4>student #{index + 1}</h4>
        <Field
          name={`${student}.firstName`}
          type="text"
          component={renderField}
          label="Grade"/>
      </li>
    )
  console.log('map is :', map);
  return (
  <ul>
    <li>
      <button type="button" onClick={() => props.fields.push({})}>Add Member</button>
      {props.touched && props.error && <span>{props.error}</span>}
    </li>
    {map}
  </ul>
  )
}

// class FieldArraysForm extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       students: []
//     }
//   }

// componentWillMount () {
//     this.props.getStudents('class 1');
// }

//   render(){
//   console.log('this is this.props.students:', this.props.students);
//   const { handleSubmit, pristine, reset, submitting } = this.props
//   return (
//     <form onSubmit={handleSubmit}>
//       <FieldArray name="members" students={this.props.students} component={renderMembers} />
//       <div>
//         <button type="submit" disabled={submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }
// }

class FieldArraysForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      students: []
    }
  }

componentWillMount () {
    this.props.getStudents('class 1');
}

  render(){
  console.log('this is this.props.students:', this.props.students);
  const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>student0</label>
          <Field name="firstName" component="input" type="text" placeholder="Grade"/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <button>Clear</button>
      </div>
    </form>
  )
}
}

FieldArraysForm = reduxForm({
  form: 'fieldArrays'     // a unique identifier for this form
})(FieldArraysForm)

function mapStateToProps(state) {
  return {
    students: state.students
  };
}


export default connect(mapStateToProps, { getStudents: getStudents })(FieldArraysForm);