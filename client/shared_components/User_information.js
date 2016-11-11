import React, { Component } from 'react';
import axios from 'axios';

  class UserInformation extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Einstein-formal_portrait-35.jpg/220px-Einstein-formal_portrait-35.jpg"}
  };

  getUserInformation(){
    axios.get()
  }

  render () {
    return (
      <div>
        <h4>Mr. Neumann</h4>
        <img src={this.state.path} />
      </div>
    );
  }
}

export default UserInformation