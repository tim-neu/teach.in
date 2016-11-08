import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/signup/signup.js'; 

class App extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  };
  render () {
    return (
      <div>
        <Signup />
        { this.props.children }
      </div>
    );
  }
}

export default App;