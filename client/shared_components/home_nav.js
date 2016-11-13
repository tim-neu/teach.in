import React, { Component } from 'react';
import {Link} from 'react-router';

  class HomeNav extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {};
  };
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="row">
          <Link to="/home" id="nav-logo">Teach.in</Link>
          <section id="nav-links">
          <Link to="/teacherSignIn" className="btn btn-default navbar-btn">TEACHER LOGIN</Link>
          <Link to="/studentSignIn" className="btn btn-default navbar-btn">STUDENT LOGIN</Link>
          <Link to="/teacherSignUp" className="btn btn-default navbar-btn">TEACHER SIGN UP</Link>
          <Link to="/studentSignUp" className="btn btn-default navbar-btn">STUDENT SIGN UP</Link>
          </section>
        </div>
      </nav>
    );
  }
}

export default HomeNav; 