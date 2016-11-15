import { combineReducers } from 'redux';
import studentsReducer from './students_reducer'
import assignmentsReducer from './assignments_reducer'
import { reducer as formReducer } from 'redux-form'
import classesReducer from './classes_reducer'

const rootReducer = combineReducers({
	students: studentsReducer,
	assignments: assignmentsReducer,
	classes: classesReducer,
	form: formReducer
});

export default rootReducer;