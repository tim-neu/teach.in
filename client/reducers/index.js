import { combineReducers } from 'redux';
import studentsReducer from './students_reducer'
import assignmentsReducer from './assignments_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	students: studentsReducer,
	assignments: assignmentsReducer,
	form: formReducer
});

export default rootReducer;