import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import HomeNav from '../../shared_components/home_nav.js';
import { connect } from 'react-redux';
import { setUserType, checkAuthentication } from '../../actions/sign_in_actions.js';

  class Signin extends React.Component {
  constructor (props) {
    super(props)
    if (_.includes(window.location.href, 'studentSignIn')) {
      this.state = { email: '', password: '', userType: 'student', submitted: false, };
    } else {
      this.state = { email: '', password: '', userType: 'teacher', submitted: false, };
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
    self.setState({ submitted: true });
    event.preventDefault();
    if (this.state.userType === 'teacher') {
      axios.post('/api/teacher/signin',{
        email: this.state.email,
        password: this.state.password,
      }).then(function (response) {
        console.log('the teacher should be authenticated', response.data);
        if (response.data === 'Authenticated'){
          localStorage.setItem("email", self.state.email);
          self.props.setUserType('teacher');
          self.props.checkAuthentication(true);
          browserHistory.push('/dashboard');
        } else {
          self.props.checkAuthentication(false);
        }
      }).catch(function (error) {
        console.log('error with sign in')
      });
    } else {
      axios.post('/api/student/signin',{
        email: this.state.email,
        password: this.state.password,
      }).then(function (response) {
        console.log('the student should be authenticated', response.data);
        if (response.data === 'Authenticated') {
          localStorage.setItem("email", self.state.email);
          self.props.setUserType('student');
          self.props.checkAuthentication(true);
          browserHistory.push('/studentDashboard');   
        } else {
          self.props.checkAuthentication(false);
        }
      }).catch(function (error) {
        console.log('error with sign in')
      });
    }
  }

  render () {
    var invalidPassword = !this.props.isAuthenticated && this.state.submitted ? <div> Invalid Email and Password Combination </div> : null;
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
  console.log('the state in sign in is;', state);
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
