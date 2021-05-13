import { withStyles } from '@material-ui/core/styles';
import React from 'react';
// styles
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, emoji, paletteName, colors, handleClick } = props;
  const miniColorBoxes = colors.map((color) => (
    <div className={classes.miniColorBox} style={{ background: color.color }} key={color.name} />
  ));
  return (
    <div>
      <div role="link" tabIndex={0} className={classes.root} onClick={handleClick}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h1 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
