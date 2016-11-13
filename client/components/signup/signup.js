import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import HomeNav from '../../shared_components/home_nav.js';

  class Signup extends React.Component {
  constructor (props) {
    super(props);
    if (window.location.href === 'http://localhost:8000/studentSignUp') {
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
    event.preventDefault();
    if (this.state.userType === 'teacher') {
      axios.post('/api/teacher/signup', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        userType: this.state.userType,
      }).then(function (response) {
        browserHistory.push('/teacherSignIn');
      });
    } else {
      axios.post('/api/student/signup', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        userType: this.state.userType,
      }).then(function (response) {
        browserHistory.push('/studentSignIn');
      });
    }
  }

  render () {
    return (
        <div>
        <HomeNav />
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
