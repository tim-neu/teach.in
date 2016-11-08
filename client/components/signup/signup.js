import React, { Component } from 'react';

  class Signup extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {name: '', email:'', password:''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  };
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({email: password.target.value});
  }

  render () {
    return (
        <form>
          <input value = {this.state.name} type="text" onChange={this.handleNameChange}></input>
          <input value = {this.state.email} type="email" onChange={this.handleEmailChange}></input>
          <input value = {this.state.password} type="password" onChange={this.handlePasswordChange}></input>
          <input type="submit"></input>
        </form>
    );
  }
}

export default Signup