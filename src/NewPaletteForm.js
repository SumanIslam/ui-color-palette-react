// dependencies
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import rgbHex from 'rgb-hex';
import { v4 as uuidv4 } from 'uuid';
import DraggableColorBox from './DraggableColorBox';
import styles from './styles/NewPalleteForm';

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentColor: 'purple',
      newName: '',
      colors: [],
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      // eslint-disable-next-line react/destructuring-assignment
      this.state.colors.every((color) => color.name.toLowerCase() !== value.toLowerCase());
    });
  }

  handleColor = (color) => {
    const newColor = `#${rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)}`;
    this.setState({ currentColor: newColor });
  };

  addNewColor = () => {
    const { currentColor, colors, newName } = this.state;
    const newColor = { color: currentColor, name: newName };
    this.setState({ colors: [...colors, newColor] });
  };

  handleChange = (evt) => {
    this.setState({ newName: evt.target.value });
  };

  handleError = (err) => console.log(err);

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open, colors, currentColor, newName } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
        </AppBar>
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
              <Button className={classes.buttonFontSize} variant="contained" color="secondary">
                Clear Palette
              </Button>
              <Button className={classes.buttonFontSize} variant="contained" color="Primary">
                Random Color
              </Button>
            </div>
          </div>

          {/* Drawer color picker goes here */}
          <ChromePicker
            className={classes.chromePicker}
            color={currentColor}
            onChangeComplete={this.handleColor}
            direction="vertical"
          />

          {/* color validator goes here */}
          <ValidatorForm onSubmit={this.addNewColor} onError={this.handleError}>
            <TextValidator
              className={classes.textValidator}
              value={newName}
              onChange={this.handleChange}
              validators={['required', 'isColorNameUnique']}
              errorMessages={['this field is required', 'Color name must be Unique']}
            />
            <Button
              className={classes.buttonCenter}
              variant="contained"
              color="primary"
              style={{ backgroundColor: `${currentColor}` }}
              onClick={this.addNewColor}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {colors.map((color) => (
            <DraggableColorBox key={uuidv4()} color={color.color} name={color.name} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
