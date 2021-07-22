// dependencies
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import arrayMove from 'array-move';
import classNames from 'classnames';
import React, { Component } from 'react';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import styles from './styles/NewPaletteForm';
import SeedColors from './SeedColors';

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: SeedColors[0].colors,
    };
  }

  // submit pallete
  submitPallete = (newPalette) => {
    const { savePalette, history } = this.props;
    const { colors } = this.state;
    const { paletteName, emoji } = newPalette;
    const newPallete = {
      paletteName,
      colors,
      emoji,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
    };
    savePalette(newPallete);
    history.push('/');
  };

  // set new color when validator form is submitted
  addNewColor = (newColor) => {
    const { colors } = this.state;
    this.setState({ colors: [...colors, newColor] });
  };

  // remove draggable colorbox
  removeColor = (colorName) => {
    const { colors } = this.state;
    this.setState({
      colors: colors.filter((color) => color.name !== colorName),
    });
  };

  // clear palette
  clearPalette = () => {
    this.setState({ colors: [] });
  };

  // get random color
  getRandomColor = () => {
    const { colors } = this.state;
    const allColors = SeedColors.map((palette) => palette.colors).flat();
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    this.setState({
      colors: [...colors, randomColor],
    });
  };

  // onSortEnd
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleError = (err) => console.log(err);

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        {/* Navbar goes here */}
        <PaletteFormNav
          open={open}
          classes={classes}
          palettes={palettes}
          submitPallete={this.submitPallete}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        {/* app drawer start here */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {/* Drawer title and buttons goes here */}
          <div>
            <h2 className={classes.textAlignCenter}>Design Your Palette</h2>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.buttonFontsize}
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.buttonFontsize}
                variant="contained"
                color="primary"
                onClick={this.getRandomColor}
                disabled={isPaletteFull}
              >
                Random Color
              </Button>
            </div>
          </div>

          {/* Drawer color picker goes here */}
          <ColorPickerForm
            classes={classes}
            colors={colors}
            isPaletteFull={isPaletteFull}
            addNewColor={this.addNewColor}
          />
        </Drawer>
        {/* Draggable color box goes here */}
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={1}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);

NewPaletteForm.defaultProps = {
  maxColors: 20,
};
