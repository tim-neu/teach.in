import { combineReducers } from 'redux';
import studentsReducer from './students_reducer';
import classesReducer from './classes_reducer';
const rootReducer = combineReducers({
	students: studentsReducer,
	classes: classesReducer,
});

export default rootReducer;
