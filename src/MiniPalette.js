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
    backgroundColor: "#dae1e4",
    height: "120px",
    width:'100%',
    borderRadius: '3px',
    overflow: 'hidden'
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
    fontSize: "1.5rem",
  },
  miniColorBox: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: '-4px'
  },
};

function MiniPalette(props) {
  const { classes, emoji, paletteName, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColorBox}
      style={{ background: color.color }}
      key={color.name}
    />
  ));
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h1 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
