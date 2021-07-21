// dependencies
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'; // select
import Snackbar from '@material-ui/core/Snackbar'; // snackbar
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider'; // slider
import 'rc-slider/assets/index.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './styles/NavbarStyles';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true }, () =>
      // eslint-disable-next-line react/destructuring-assignment
      this.props.handleChange(this.state.format)
    );
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showingSlider, showingBack, classes } = this.props;
    const { format, open } = this.state;
    return (
      <nav className={classes.navbar}>
        {showingBack && (
          <div className={classes.logo}>
            <Link to="/">&larr;</Link>
          </div>
        )}

        {showingSlider && (
          <div className={classes.sliderContainer}>
            <span className={classes.Level}>Level: [{level}]</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="hexWithoutHash">HEX - FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          message={
            format === 'hexWithoutHash'
              ? `Color format has changed to HEX`
              : `Color format has changed to ${format.toUpperCase()}`
          }
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          action={
            <IconButton aria-label="close" color="inherit" onClick={this.closeSnackbar}>
              <CloseIcon />
            </IconButton>
          }
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
