import { combineReducers} from 'redux';
import studentsReducer from './students_reducer'
const rootReducer = combineReducers({
	students: studentsReducer
});

export default rootReducer;