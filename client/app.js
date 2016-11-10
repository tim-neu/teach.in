import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  };
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default App;