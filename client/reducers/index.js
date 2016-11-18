import { combineReducers } from 'redux';
import studentsReducer from './students_reducer';
import assignmentsReducer from './assignments_reducer';
import classesReducer from './classes_reducer';
import currentAssignmentReducer from './current_assignment_reducer';
import resources_reducer from './resources_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	students: studentsReducer,
	assignments: assignmentsReducer,
	classes: classesReducer,
	currentAssignment: currentAssignmentReducer,
	form: formReducer,
	resources: resources_reducer
});

export default rootReducer;
