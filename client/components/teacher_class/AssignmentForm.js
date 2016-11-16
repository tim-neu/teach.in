import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {handleSubmitAssignment} from '../../actions/assignment_actions';

class AssignmentForm extends Component {
	constructor (props) {
		super(props);
		this.state = {name: '', classId: '', type: '', dueDate: '', grade: '0'};
		this.handleSubmitAssignment = this.handleSubmitAssignment.bind(this);
	}

	handleSubmitAssignment(event){
		self = this;
		console.log(self.props, "self.props")
		event.preventDefault();
		self.props.handleSubmitAssignment(self.state.name, self.props.classTitle, self.state.type, self.state.date);
	}

	render () {
		console.log(this.props, "I FUCKED A HORSE")
		return (
			<div className='assignmentForm'>
				<h4>Create Assignment</h4>
				<form>
					<div>
						<input
							type='text'
							name='assignment-name'
							placeholder='Assignment Name' 
							value={this.state.name} 
							onChange={assignmentName => this.setState({ name: assignmentName.target.value })}
						/>
					</div>
					<div>
						<input
							type='text'
							name='assignment-type'
							placeholder='Test, Quiz, or Homework'
							value={this.state.type} 
							onChange={assignmentType => this.setState({ type: assignmentType.target.value })} 
						/>
					</div>
					<div>
						<input 
							type='date'
							name='assignment-dueDate'
							placeholder='Due Date'
							value={this.state.dueDate} 
							onChange={assignmentDueDate => this.setState({ dueDate: assignmentDueDate.target.value })}
						/>
					</div>
					<div>
						<button className="btn" onClick={this.handleSubmitAssignment}>Submit</button>
						<button className="btn" >Cancel</button>
					</div>
				</form>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		assignments: state.assignments.assignments
	}
}

export default connect(mapStateToProps, {handleSubmitAssignment: handleSubmitAssignment})(AssignmentForm); 

// import React, { Component, PropTypes } from 'react'
// import { reduxForm } from 'redux-form'
// export const fields = [ 'firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes' ]

// class SimpleForm extends Component {
//   render() {
//     const {
//       fields: { firstName, lastName, email, sex, favoriteColor, employed, notes },
//       handleSubmit,
//       resetForm,
//       submitting
//       } = this.props
//     return (<form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name</label>
//           <div>
//             <input type="text" placeholder="First Name" {...firstName}/>
//           </div>
//         </div>
//         <div>
//           <label>Last Name</label>
//           <div>
//             <input type="text" placeholder="Last Name" {...lastName}/>
//           </div>
//         </div>
//         <div>
//           <label>Email</label>
//           <div>
//             <input type="email" placeholder="Email" {...email}/>
//           </div>
//         </div>
//         <div>
//           <label>Sex</label>
//           <div>
//             <label>
//               <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
//             </label>
//             <label>
//               <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
//             </label>
//           </div>
//         </div>
//         <div>
//           <label>Favorite Color</label>
//           <div>
//             <select
//               {...favoriteColor}
//               // required syntax for reset form to work
//               // undefined will not change value to first empty option
//               // when resetting
//               value={favoriteColor.value || ''}>
//               <option></option>
//               <option value="ff0000">Red</option>
//               <option value="00ff00">Green</option>
//               <option value="0000ff">Blue</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           <label>
//             <input type="checkbox" {...employed}/> Employed
//           </label>
//         </div>
//         <div>
//           <label>Notes</label>
//           <div>
//             <textarea
//               {...notes}
//               // required for reset form to work (only on textarea's)
//               // see: https://github.com/facebook/react/issues/2533
//               value={notes.value || ''}/>
//           </div>
//         </div>
//         <div>
//           <button type="submit" disabled={submitting}>
//             {submitting ? <i/> : <i/>} Submit
//           </button>
//           <button type="button" disabled={submitting} onClick={resetForm}>
//             Clear Values
//           </button>
//         </div>
//       </form>
//     )
//   }
// }

// SimpleForm.propTypes = {
//   fields: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   resetForm: PropTypes.func.isRequired,
//   submitting: PropTypes.bool.isRequired
// }

// export default reduxForm({
//   form: 'simple',
//   fields
// })(SimpleForm)