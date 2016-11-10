import React from 'react';
import Graph from '../../shared_components/graph.js';
import Calendar from '../../shared_components/Calendar.js';
import DashboardNav from '../../shared_components/dashboard_nav.js';
import UserInformation from '../../shared_components/User_information.js';


const TeacherDashboard = function(){
  return <div className="row">

  <DashboardNav />
  <UserInformation />
  <Graph />
  <Calendar />
  </div>
}

export default TeacherDashboard