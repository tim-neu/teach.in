import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import HomeNav from '../../shared_components/home_nav.js';
import { connect } from 'react-redux';
import { setUserType, checkAuthentication } from '../../actions/sign_in_actions.js';

  class Signin extends React.Component {
  constructor (props) {
    super(props)
    if (_.includes(window.location.href, 'studentSignIn')) {
      this.state = { email: '', password: '', userType: 'student', submitted: false, };
    } else {
      this.state = { email: '', password: '', userType: 'teacher', submitted: false, showInvalidEmail: false, };
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    self = this;
    setTimeout(()=> {
        self.setState({ showInvalidEmail: true });
    }, 1250);
    self.setState({ submitted: true });
    event.preventDefault();
    if (this.state.userType === 'teacher') {
      axios.post('/api/teacher/signin',{
        email: this.state.email,
        password: this.state.password,
      }).then(function (response) {
        if (response.data === 'Authenticated'){
          localStorage.setItem("email", self.state.email);
          self.props.setUserType('teacher');
          sessionStorage.setItem("isAuthenticated", true);
          self.props.checkAuthentication(true);
          browserHistory.push('/dashboard');
        } else {
          sessionStorage.setItem("isAuthenticated", false);
          self.props.checkAuthentication(false);
        }
      }).catch(function (error) {
      });
    } else {
      axios.post('/api/student/signin',{
        email: this.state.email,
        password: this.state.password,
      }).then(function (response) {
        if (response.data === 'Authenticated') {
          localStorage.setItem("email", self.state.email);
          self.props.setUserType('student');
          sessionStorage.setItem("isAuthenticated", true);
          self.props.checkAuthentication(true);
          browserHistory.push('/studentDashboard');   
        } else {
          sessionStorage.setItem("isAuthenticated", false);
          self.props.checkAuthentication(false);
        }
      }).catch(function (error) {
      });
    }
  }

  render () {
    var invalidPassword = !this.props.isAuthenticated && this.state.submitted && this.state.showInvalidEmail ? <div> Invalid Email and Password Combination </div> : null;
    return (
        <div className="row">
          <HomeNav />
          <div id="form-container">
          <h1 className="Auth-header">Sign in</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="email" value = {this.state.email} type="email" onChange={this.handleEmailChange}></input>
            <input placeholder="password" value = {this.state.password} type="password" onChange={this.handlePasswordChange}></input>
            {invalidPassword}
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userType: state.userType.userType,
    isAuthenticated: state.isAuthenticated.isAuthenticated,
  };
}

const SignInContainer = connect(mapStateToProps, {
  setUserType: setUserType,
  checkAuthentication: checkAuthentication,
})(Signin);
export default SignInContainer;
