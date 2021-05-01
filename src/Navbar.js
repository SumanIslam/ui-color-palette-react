// dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider, { Range } from "rc-slider"; // slider
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select"; // select
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar"; // snackbar
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// styles
import "./Navbar.css";

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
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        <div className="slider-container">
          <span>Level: [{level}]</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
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

export default Navbar;
