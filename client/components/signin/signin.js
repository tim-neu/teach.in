import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import HomeNav from '../../shared_components/home_nav.js';
import { connect } from 'react-redux';


  class Signin extends React.Component {
  constructor (props) {
    super(props)
    if (_.includes(window.location.href, 'studentSignIn')) {
      this.state = { email: '', password: '', userType: 'student' };
    } else {
      this.state = { email: '', password: '', userType: 'teacher' };
      console.log('i set the state to teacher', this.state.userType);
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    console.log('the current url is:', window.location.href);
  }
  
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    self = this;

    event.preventDefault();
    if (this.state.userType === 'teacher') {
      axios.post('/api/teacher/signin',{
        email: this.state.email,
        password: this.state.password,
      }).then(function (response) {
        localStorage.setItem("email", self.state.email);
        browserHistory.push('/dashboard');
      }).catch(function (error) {
        console.log('error with sign in')
      });
    } else {
      axios.post('/api/student/signin',{
        email: this.state.email,
        password: this.state.password,
      }).then(function (response) {
        localStorage.setItem("email", self.state.email);
        browserHistory.push('/studentDashboard');    
      }).catch(function (error) {
        console.log('error with sign in')
      });
    }
  }

  render () {
    return (
        <div className="row">
          <HomeNav />
          <div id="form-container">
          <h1 className="Auth-header">Sign in</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="email" value = {this.state.email} type="email" onChange={this.handleEmailChange}></input>
            <input placeholder="password" value = {this.state.password} type="password" onChange={this.handlePasswordChange}></input>
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    userType: state.userType.userType,
  };
}

const SignInContainer = connect(mapStateToProps, {
  
})(Signin);
export default Signin