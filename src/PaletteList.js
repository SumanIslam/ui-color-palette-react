// dependencies
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { classes, palettes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create New palette</Link>
          </div>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} timeout={500} classNames="item">
                <MiniPalette
                  key={palette.id}
                  id={palette.id}
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                  deletePalette={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
