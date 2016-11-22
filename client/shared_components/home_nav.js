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
    console.log('i was clicked');
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
          <Link to="/teacherSignIn" className="btn btn-default navbar-btn">TEACHER LOGIN</Link>
          <Link to="/studentSignIn" className="btn btn-default navbar-btn">STUDENT LOGIN</Link>
          <Link to="/teacherSignUp" className="btn btn-default navbar-btn">TEACHER SIGN UP</Link>
          <Link to="/studentSignUp" className="btn btn-default navbar-btn">STUDENT SIGN UP</Link>
      </div>;
    }
    return (
      <nav className="navbar navbar-default">
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
  console.log('state in home nav is:', state);
  return {
    isAuthenticated: state.isAuthenticated.isAuthenticated,
  };
};

var HomeNavContainer = connect(mapStateToProps, { logOut: logOut })(HomeNav);
export default HomeNavContainer;
