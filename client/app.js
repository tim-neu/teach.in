import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeNav from './shared_components/home_nav.js'; 

class App extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  };
  render () {
    return (
      <div>
        <HomeNav />
        { this.props.children }
      </div>
    );
  }
}

export default App;