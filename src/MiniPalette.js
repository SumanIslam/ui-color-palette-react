import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid red",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "gray",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: '1.5rem'
  },
};

function MiniPalette(props) {
  const { classes, emoji, paletteName } = props;
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.colors}></div>
        <h1 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
