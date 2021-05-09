// dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";


// styles
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
  static defaultProps = {
    message: [
      "copied!",
      "past me!",
      "got it!",
      "right one!",
      "It'll rock!",
      "panda style!",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({ copied: true }, () =>
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500)
    );
  }
  render() {
    const {
      background,
      name,
      colorId,
      paletteId,
      showMore,
      classes,
    } = this.props;
    const { copied } = this.state;
    const copiedMessage = this.props.message[Math.floor(Math.random() * 6)];

    // let brightness =
    //   rgbArray[0] * 0.299 + rgbArray[1] * 0.587 + rgbArray[2] * 0.114;

    // // const isLightColor = brightness > 186;
    // const isDarkColor = brightness <= 186;

    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div className={classes.colorBox} style={{ background }}>
          <div
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
            style={{ background }}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && classes.showMessage
            }`}
          >
            <h1 className={classes.textColor}>{copiedMessage}</h1>
            <p className={classes.textColor}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.textColor}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showMore && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
