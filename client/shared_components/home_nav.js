import React, { Component } from 'react';
import {Link} from 'react-router';

  class homeNav extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {};
  };
  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <span>Teach.in</span>
          
          <button type="button" className="btn btn-default navbar-btn">LOGIN</button>
          <button type="button" className="btn btn-default navbar-btn">SIGN UP</button>
        </div>
      </nav>
    );
  }
}

export default homeNav