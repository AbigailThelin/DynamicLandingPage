import React, { Component } from 'react';
import './sass/App.css';

import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        {Router}
      </div>
    );
  }
}

export default App;
