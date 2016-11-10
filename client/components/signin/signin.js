import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import HomeNav from '../../shared_components/home_nav.js';

  class Signin extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {email:'', password:''};
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
    event.preventDefault();
    axios.post('/api/teacher/signin',{
      email: this.state.email,
      password: this.state.password

    }).then(function(response){
      console.log('the signin response is:', response);
      browserHistory.push("dashboard")
    }).catch(function(error){
      console.log('error with sign in')
    })
  }

  render () {
    return (
        <div>
          <HomeNav />
          <form onSubmit={this.handleSubmit}>
            <input value = {this.state.email} type="email" onChange={this.handleEmailChange}></input>
            <input value = {this.state.password} type="password" onChange={this.handlePasswordChange}></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Signin