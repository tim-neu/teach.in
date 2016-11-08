import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
<<<<<<< HEAD
    super(props),
    this.state = {};
  };

=======
    super(props)
    
    this.state = {};
  };
>>>>>>> shared-components
  render () {
    return (
      <div>
        <section><h1 className="text-center">Hoop.in</h1></section>
        { this.props.children }
      </div>
    );
  }
}

export default App;