//Libs
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// Components
import App from './app.js';
import HomeNav from './shared_components/home_nav.js';
import Graph from './shared_components/graph.js';
import CreateClassEvent from './components/create_class_event/CreateClassEvent.js';
import Signup from './components/signup/signup.js';
import Signin from './components/signin/signin.js';
import TeacherDashboard from './components/teacher_dashboard/teacher_dashboard.js';
import StudentDashboard from './components/student_dashboard/StudentDashboard.js';
import Calendar from './shared_components/Calendar.js';
import Upload from './shared_components/Upload-Component.js';
import Home from './components/home/home.js';
import Classes from './components/teacher_classes/Classes';
import Class from './components/teacher_classes/Class';
import ClassGradeDash from './components/teacher_class/ClassGradeDash';

// Routes
const routes = (
	<Route path="/" component={App}>
	  	<IndexRedirect to="/home" />
	  	<Route path="home" component={Home} />
	  	<Route path="teacherSignIn" component={Signin} />
	  	<Route path="studentSignIn" component={Signin} />
	  	<Route path="teacherSignUp" component={Signup} />
	  	<Route path="studentSignUp" component={Signup} />
		<Route path="dashboard"component={TeacherDashboard} />
		<Route path="studentDashboard" component={StudentDashboard} />
		<Route path="graph" component={Graph} />
		<Route path="upload" component={Upload} />
		<Route path="calendar" component={Calendar} />
	  <Route path="grades" component={ClassGradeDash} />
		<Route path="create_class_event" component={CreateClassEvent} />
	    <Route path='/classes' component={Classes} />
	    <Route name='/class' path='/:className' component={Class} />
	</Route>
);

export default routes;