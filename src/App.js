// dependencies
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelpers';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  findPalette = (id) => SeedColors.find((palette) => palette.id === id);

  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/"
          render={(routeProps) => <PaletteList palettes={SeedColors} {...routeProps} />}
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
