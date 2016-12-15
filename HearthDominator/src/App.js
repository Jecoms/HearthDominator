import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Hearth Dominator</h2>

          <p>
            Start a <button type="button" onClick={() => void(0)}>New Draft</button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
