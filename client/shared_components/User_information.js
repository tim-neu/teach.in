import React, { Component } from 'react';

  class UserInformation extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Einstein-formal_portrait-35.jpg/220px-Einstein-formal_portrait-35.jpg"}
  };
  render () {
    return (
      <div>
        <h1>Mr. Neumann</h1>
        <img src={this.state.path} />
      </div>
    );
  }
}

export default UserInformation