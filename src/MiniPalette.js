import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { PureComponent } from 'react';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
  handleDialogue = (e) => {
    const { openDialogue, id } = this.props;
    e.stopPropagation();
    openDialogue(id);
  };

  handleClick = () => {
    const { goToPalette, id } = this.props;
    goToPalette(id);
  };

  render() {
    const { classes, emoji, paletteName, colors } = this.props;
    return (
      <div>
        <div role="link" tabIndex={0} className={classes.root} onClick={this.handleClick}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: 'all 0.3s ease-in' }}
            onClick={this.handleDialogue}
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
