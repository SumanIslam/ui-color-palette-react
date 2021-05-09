// dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Slider from "rc-slider"; // slider
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select"; // select
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar"; // snackbar
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// styles
// import "./Navbar.css";

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "7vh",
  },
  logo: {
    display: "inline-block",
    background: "#eceff1",
    padding: "0 1rem",
    marginRight: "1rem",
    height: "45px",
    lineHeight: "39px",
    fontSize: "150%",
    fontWeight: "500",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  sliderContainer: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    "& span": {
      fontWeight: "500",
    },
  },
  slider: {
    width: "200px",
    margin: "0 1rem",
    "& .rc-slider-rail": {
      height: "12px",
    },
    "& .rc-slider-track": {
      background: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:focus,.rc-slider-handle:active": {
      background: "green",
      outline: "0",
      border: "2px solid green",
      boxShadow: "none",
      width: "20px",
      height: "20px",
      marginTop: "-3.9px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.handleChange(this.state.format)
    );
  }

  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingSlider, classes } = this.props;
    const { format, open } = this.state;
    return (
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showingSlider && (
          <div className={classes.sliderContainer}>
            <span>Level: [{level}]</span>
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
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          message={
            format === "hexWithoutHash"
              ? `Color format has changed to HEX`
              : `Color format has changed to ${format.toUpperCase()}`
          }
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={this.closeSnackbar}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
