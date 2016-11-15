//Libs
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// Components
import App from './app.js';
import HomeNav from './shared_components/home_nav.js';
import Graph from './shared_components/graph.js';
import CreateClass from './components/create_class/CreateClass.js';
import Signup from './components/signup/signup.js';
import Signin from './components/signin/signin.js';
import TeacherDashboard from './components/teacher_dashboard/teacher_dashboard.js';
import Calendar from './shared_components/Calendar.js';
import Home from './components/home/home.js';
import Classes from './components/teacher_classes/Classes';
import Class from './components/teacher_classes/Class';

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
		<Route path="graph" component={Graph} />
		<Route path="calendar" component={Calendar} />
		<Route path="create_class" component={CreateClass} />
	    <Route path='/classes' component={Classes} />
	    <Route name='/class' path='/:className' component={Class} />
	</Route>
);

// const routes = (
//   <Router history={browserHistory}>
//     <Route component={App} >
//     	<Route path="/" component = {Classes} />
//     </Route>
//     <Route path="/graph" component={Graph} />
//     <Route path="/signup" component={Signup} />
//     <Route path="/signin" component={Signin} />
//     <Route path='/create_class' component={CreateClass} />
//     <Route path='/calendar' component={Calendar} />
//     <Route path = '/classes' component = {Classes} />
//   </Router>
// );

export default routes;