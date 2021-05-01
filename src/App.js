// dependencies
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SeedColors from "./SeedColors";
import { generatePalette } from "./ColorHelpers";

// components
import Palette from "./Palette";
import PaletteList from "./PaletteList";

class App extends Component {
  findPalette = (id) => SeedColors.find((palette) => palette.id === id);
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={SeedColors} />} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
