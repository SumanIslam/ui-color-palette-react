import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Component } from 'react';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends Component {
  handleDelete = (e) => {
    const { deletePalette, id } = this.props;
    e.stopPropagation();
    deletePalette(id);
  };

  render() {
    const { classes, emoji, paletteName, colors, handleClick } = this.props;
    return (
      <div>
        <div role="link" tabIndex={0} className={classes.root} onClick={handleClick}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: 'all 0.3s ease-in' }}
            onClick={this.handleDelete}
          />
          <div className={classes.colors}>
            {colors.map((color) => (
              <div
                className={classes.miniColorBox}
                style={{ background: color.color }}
                key={color.name}
              />
            ))}
          </div>
          <h1 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
