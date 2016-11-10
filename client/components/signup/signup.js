import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import HomeNav from '../../shared_components/home_nav.js';

  class Signup extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {name: '', email:'', password:''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/teacher/signup',{
      name: this.state.name,
      email: this.state.email,
      password: this.state.password

    }).then(function(response){
      browserHistory.push('/signin')
    })
  }

  render () {
    return (
        <div>
        <HomeNav />
          <form onSubmit={this.handleSubmit}>
            <input value = {this.state.name} type="text" onChange={this.handleNameChange}></input>
            <input value = {this.state.email} type="email" onChange={this.handleEmailChange}></input>
            <input value = {this.state.password} type="password" onChange={this.handlePasswordChange}></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Signup