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
import { ChromePicker } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import rgbHex from 'rgb-hex';
import DraggableColorList from './DraggableColorList';
import styles from './styles/NewPaletteForm';
import PaletteFormNav from './paletteFormNav';

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    const { palettes } = this.props;
    this.state = {
      open: true,
      currentColor: '#800080',
      newColorName: '',
      colors: palettes[0].colors,
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      // eslint-disable-next-line react/destructuring-assignment
      this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule('isColorUnique', () =>
      // eslint-disable-next-line react/destructuring-assignment
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  // submit pallete
  submitPallete = (newPaletteName) => {
    const { savePalette, history } = this.props;
    const { colors } = this.state;
    const paletteName = newPaletteName;
    const newPallete = {
      paletteName,
      colors,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
    };
    savePalette(newPallete);
    history.push('/');
  };

  // set current color from chromePicker
  handleCurrentColor = (color) => {
    const newColor = `#${rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)}`;
    this.setState({ currentColor: newColor });
  };

  // set new color when validator form is submitted
  addNewColor = (event) => {
    event.preventDefault();
    const { currentColor, colors, newColorName } = this.state;
    const newColor = { color: currentColor, name: newColorName };
    this.setState({ colors: [...colors, newColor], newColorName: '' });
  };

  // set current name of color
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // remove draggable color
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
    const { palettes } = this.props;
    const { colors } = this.state;
    const allColors = palettes.map((palette) => palette.colors).flat();
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
    const { open, colors, currentColor, newColorName } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
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
                className={classes.buttonFontSize}
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.buttonFontSize}
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
          <ChromePicker
            className={classes.chromePicker}
            color={currentColor}
            onChangeComplete={this.handleCurrentColor}
            direction="vertical"
          />

          {/* color validator goes here */}
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              className={classes.textValidator}
              variant="filled"
              placeholder="Add a color"
              name="newColorName"
              value={newColorName}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={[
                'this field is required',
                'color name must be unique',
                'color must be unique',
              ]}
              onChange={this.handleChange}
            />
            <Button
              className={classes.buttonCenter}
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: isPaletteFull ? 'gray' : `${currentColor}` }}
              disabled={isPaletteFull}
            >
              {isPaletteFull ? 'Palette Full' : 'Add Color'}
            </Button>
          </ValidatorForm>
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
