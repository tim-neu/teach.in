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
        <section><h1 className="text-center">Hasdffasdoop.in</h1></section>
        { this.props.children }
      </div>
    );
  }
}

export default App;