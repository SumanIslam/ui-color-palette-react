// dependencies
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelpers';
import NewPaletteForm from './NewPaletteForm';
import Palette from './Palette';
import PaletteList from './PaletteList';
// components
import SeedColors from './SeedColors';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  state = {
    palettes: SeedColors,
  };

  findPalette = (id) => {
    const { palettes } = this.state;
    return palettes.find((palette) => palette.id === id);
  };

  savePallete = (newPalette) => {
    console.log(newPalette);
    this.setState((state) => ({ palettes: [...state.palettes, newPalette] }));
  };

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm savePallete={this.savePallete} {...routeProps} />}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
              {...routeProps}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
