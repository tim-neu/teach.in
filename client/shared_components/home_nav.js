import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { logOut } from '../actions/sign_in_actions.js'

  class HomeNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    sessionStorage.setItem('isAuthenticated', false);
    this.props.logOut(this.state.userType);
  }

  render () {
    const isLoggedIn = this.props.isAuthenticated;
    var link = null;
    if (isLoggedIn){
      link = <Link to="/home" className="btn btn-default navbar-btn" onClick={this.handleClick}>SIGN OUT</Link>
    } else {
      link =
      <div>           
          <Link to="/teacherSignIn" className="btn navbar-btn">TEACHER LOGIN</Link>
          <Link to="/studentSignIn" className="btn navbar-btn">STUDENT LOGIN</Link>
          <Link to="/teacherSignUp" className="btn navbar-btn">TEACHER SIGN UP</Link>
          <Link to="/studentSignUp" className="btn navbar-btn">STUDENT SIGN UP</Link>
      </div>;
    }
    return (
      <nav className="navbar">
        <div className="row">
          <Link to="/home" id="nav-logo">Teach.in</Link>
          <section id="nav-links">
          {link}
          </section>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated.isAuthenticated,
  };
};

var HomeNavContainer = connect(mapStateToProps, { logOut: logOut })(HomeNav);
export default HomeNavContainer;
