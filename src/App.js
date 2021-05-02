// dependencies
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SeedColors from "./SeedColors";
import { generatePalette } from "./ColorHelpers";

// components
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  findPalette = (id) => SeedColors.find((palette) => palette.id === id);
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={SeedColors} {...routeProps} />
          )}
        />
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
        <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette />}/>
      </Switch>
    );
  }
}

export default App;
