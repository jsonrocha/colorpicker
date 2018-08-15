import React, { Component } from 'react';
import './App.css';
import ColorPicker from './ColorPicker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Color Picker</h1>
        </header>
        <section>
        <ColorPicker />
        </section>
      </div>
    );
  }
}

export default App;
