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

// const roster1 = ['student1', 'student2', 'student3', 'student4','student4', 'student5'];
// const roster2 = ['student6','student7', 'student8', 'student9', ' student10'];
// const roster = { roster1: roster1, roster2: roster2};
// class App extends React.Component {
//   render () {
//     return React.cloneElement(this.props.children, {roster: roster});
//   }
// }
export default App;