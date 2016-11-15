import React, { Component } from 'react';
import {Link} from 'react-router';

  class DashboardNav extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {};
  };

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="row">
          <Link to="/home" id="nav-logo">Teach.in</Link>
          <Link to="/dashboard" className="btn btn-default navbar-btn">DASHBOARD</Link>
          <Link to="/classes" className="btn btn-default navbar-btn">CLASSES</Link>
        </div>
      </nav>
    );
  }
}

export default DashboardNav; 