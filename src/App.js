// dependencies
import React, { Component } from 'react';
import SeedColors from "./SeedColors";
import { generatePalette } from "./ColorHelpers";

// components
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(SeedColors[4])} />
      </div>
    );
  }
}

export default App;
