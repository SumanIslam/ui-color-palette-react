// dependencies
import React, { Component } from "react";
import "react-router-dom";
import { withStyles } from "@material-ui/core/styles"; // css in js

// component
import MiniPalette from "./MiniPalette";

const styles = {
  root: {
    backgroundColor: "purple",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "65%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    fontSize: "1rem",
  },
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>React Colors</h1>
          </div>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
