import { combineReducers } from 'redux';
import studentsReducer from './students_reducer'
import assignmentsReducer from './assignments_reducer'
import classesReducer from './classes_reducer'

const rootReducer = combineReducers({
	students: studentsReducer,
	assignments: assignmentsReducer,
	classes: classesReducer,
});

export default rootReducer;