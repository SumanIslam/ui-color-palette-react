// dependencies
import React, { Component } from 'react';

// components
import Palette from './Palette';
import SeedColors from "./SeedColors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...SeedColors[4]}/>
      </div>
    );
  }
}

export default App;
