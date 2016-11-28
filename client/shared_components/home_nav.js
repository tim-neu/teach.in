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
      link = <Link id="home-style" to="/home" className="btn btn-default navbar-btn" onClick={this.handleClick}>SIGN OUT</Link>
    } else {
      link =
      <div>

          <Link to="/teacherSignIn" className="btn navbar-btn">TEACHER LOGIN</Link>
          <Link to="/studentSignIn" className="btn navbar-btn">STUDENT LOGIN</Link>
      </div>;
    }
    return (
      <div>
        <nav id="navbar">
          <div className="row" id="home-nav-links">
            <Link to="/home" className="nav-logo">Teach.in</Link>
            <section className="nav-links">

            {link}
            </section>
          </div>
        </nav>
        <nav id="mobilenav">
          <div className="row">
            <Link to="/home" className="nav-logo">Teach.in</Link>
            <div className="dropdown">
            <span id="mobile-menu-text" className="glyphicon glyphicon-align-justify"></span>
            <div className="dropdown-content">
              {link}
            </div>
          </div>
          </div>
        </nav>
      </div>
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
