import { ALL_STUDENTS } from '../actions/types';
import { ADD_STUDENT } from '../actions/types';

const INITIAL_STATE = { students: [] };

function addStudent(prevState, student) {
	var prevStudents = prevState.students;
	var newStudents = prevStudents.concat(student);
	return { ...prevState, students: newStudents };
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ALL_STUDENTS:
			console.log('the payload for get all students is:', action.payload);
			return { ...state, students: action.payload };
		case ADD_STUDENT:
			console.log(' the payload to add a student should be a student:', action.payload);
			return addStudent(state, action.payload);
		default:
			return state;
	}
}
