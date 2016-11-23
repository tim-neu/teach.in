import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import HomeNav from '../../shared_components/home_nav.js';
import _ from 'lodash';

  class Signup extends React.Component {
  constructor (props) {
    super(props);

    if (_.includes(window.location.href, 'studentSignUp')) {
      this.state = { name: '', email: '', password: '', userType: 'student' };
    } else {
      this.state = { name: '', email: '', password: '', userType: 'teacher' };
      console.log('i set the state to teacher', this.state.userType);
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleNameChange(event) {
    this.setState({ name: event.target.value });
  };

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  };

  handleSubmit(event) {
    if (_.includes(window.location.href, 'studentSignUp')) {
      console.log('i should be switching usertype to student');
      this.setState({ userType: 'student' });
    } else {
      this.setState({ userType: 'teacher' });
    }
    event.preventDefault();
    var self = this;
    _.delay(function () {
      if (self.state.userType === 'teacher') {
        axios.post('/api/teacher/signup', {
          name: self.state.name,
          email: self.state.email,
          password: self.state.password,
          userType: self.state.userType,
        }).then(function (response) {
          browserHistory.push('/teacherSignIn');
        });
      } else {
        axios.post('/api/student/signup', {
          name: self.state.name,
          email: self.state.email,
          password: self.state.password,
          userType: self.state.userType,
        }).then(function (response) {
          browserHistory.push('/studentSignIn');
        });
      }
    }, 500);
  }

  render () {
    return (
        <div>
        <HomeNav />
        <h1 className="Auth-header">Sign up</h1>
          <form onSubmit={this.handleSubmit}>
            <input id="signin-input" placeholder="name" value = {this.state.name} type="text" onChange={this.handleNameChange}></input>
            <input id="signin-input" placeholder="email" value = {this.state.email} type="email" onChange={this.handleEmailChange}></input>
            <input id="signin-input" placeholder="password" value = {this.state.password} type="password" onChange={this.handlePasswordChange}></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Signup;
