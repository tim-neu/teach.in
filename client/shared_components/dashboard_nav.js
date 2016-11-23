import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../actions/sign_in_actions.js';
import { browserHistory } from 'react-router';

  class DashboardNav extends React.Component {
  constructor (props) {
    super(props);
    if (_.includes(window.location.href, 'studentDashboard')) {
      this.state = { userType: 'student' };
      console.log('i set the state to student for navBar', this.state.userType);
    } else {
      this.state = { userType: 'teacher' };
      console.log('i set the state to teacher for navBar', this.state.userType);
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(){
    console.log('i was clicked');
    sessionStorage.setItem('isAuthenticated', false);
    this.props.logOut(this.state.userType);
  }

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="row">
          <Link to="/home" id="nav-logo">Teach.in</Link>
          <Link to="/dashboard" className="btn btn-default navbar-btn">DASHBOARD</Link>
          <Link to="/classes" className="btn btn-default navbar-btn">CLASSES</Link>
          <Link to="/home" className="btn btn-default navbar-btn" onClick={this.handleClick}>SIGNOUT</Link>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.isAuthenticated.isAuthenticated,
    userType: state.userType.userType,
  };
};

var DashboardNavContainer = connect(mapStateToProps, { logOut: logOut })(DashboardNav);
export default DashboardNavContainer;
