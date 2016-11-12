import { render } from 'react-dom';
//Libs
import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
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

import routes from './router';
import reducers from './reducers';

const createStoreWithMiddleware=applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Render
render(
	<Provider store={store}>
		<Router history={browserHistory}>
  			{routes}
  		</Router>
  </Provider>

  , document.getElementById('app')

);