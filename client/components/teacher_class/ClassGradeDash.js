import React from 'react';
import DashboardNav from '../../shared_components/dashboard_nav.js';
import AssignmentForm from './AssignmentForm.js';

const ClassGradeDash = function(){
	return (
    <div>
  	  <div className="row">
  		  <DashboardNav />
      </div>

  	 <div className="row">
  		  <div className="col-lg-4">
  			 <AssignmentForm />
  		  </div>
      </div>
    </div>
	)
}

export default ClassGradeDash