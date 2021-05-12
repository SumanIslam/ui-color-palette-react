// dependencies
import { withStyles } from '@material-ui/core/styles'; // css in js
import React, { Component } from 'react';
import 'react-router-dom';
// component
import MiniPalette from './MiniPalette';
// Styles
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push(`/palette/${id}`);
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
