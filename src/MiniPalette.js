import React from "react";
import { withStyles } from "@material-ui/core/styles";

// styles
import styles from './styles/MiniPaletteStyles'

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
      <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h1 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
