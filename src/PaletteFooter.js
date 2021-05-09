// dependencies
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  footer: {
    height: "6vh",
    background: "white",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    marginRight: "0.5rem",
  },
  emoji: {
    margin: "0 0.5rem",
  },
};

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.footer}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
