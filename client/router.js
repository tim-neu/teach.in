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

// Routes
const routes = (
  <Router history={browserHistory}>
	<Route path="/" component={App}>
	  	<IndexRedirect to="/home" />
	  	<Route path="home" component={Home} />
	  	<Route path="signin" component={Signin} />
	  	<Route path="signup" component={Signup} />
		<Route path="dashboard" component={TeacherDashboard} />
		<Route path="graph" component={Graph} />
		<Route path="calendar" component={Calendar} />
		<Route path="create_class" component={CreateClass} />
	</Route>
  </Router>
);
export default routes;