import { combineReducers } from 'redux';
import studentsReducer from './students_reducer';
import assignmentsReducer from './assignments_reducer';
import classesReducer from './classes_reducer';
import currentAssignmentReducer from './current_assignment_reducer';
import resources_reducer from './resources_reducer';
import photo_reducer from './photo_reducer';
import signInReducer from './sign_in_reducer';
import studentInformationReducer from './student_information_reducer';
import classPointsReducer from './class_points_reducer';
import classEventsReducer from './class_events_reducer';
import calendarReducer from './calendar_reducer';
import studentReducer from './student_resources_reducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
	isAuthenticated: signInReducer,
	students: studentsReducer,
	assignments: assignmentsReducer,
	classes: classesReducer,
	currentAssignment: currentAssignmentReducer,
	form: formReducer,
	resources: resources_reducer,
	profilePicture: photo_reducer,
	userType: signInReducer,
	class_points: classPointsReducer,
	classEvents: classEventsReducer,
	calendar: calendarReducer,
	studentInformation: studentInformationReducer,
	studentResources: studentReducer,
});

export default rootReducer;
