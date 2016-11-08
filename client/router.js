//Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './app';
import CreateClass from './create_class/CreateClass.js';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route path='/create_class' component={CreateClass} />
    </Route>
  </Router>
);
export default routes;