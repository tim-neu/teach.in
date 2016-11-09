import React, { Component } from 'react';
import {Link} from 'react-router';

  class HomeNav extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {};
  };
  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <span>Teach.in</span>
          <Link to="#" className="btn btn-default navbar-btn">LOGIN</Link>
          <Link to="/signup" className="btn btn-default navbar-btn">SIGN UP</Link>
        </div>
      </nav>
    );
  }
}

export default HomeNav; 