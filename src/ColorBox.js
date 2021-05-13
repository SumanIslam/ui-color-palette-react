// dependencies
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
// styles
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    message: ['copied!', 'past me!', 'got it!', 'right one!', "It'll rock!", 'panda style!'],
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
    const { background, name, colorId, paletteId, showMore, classes, message } = this.props;
    const { copied } = this.state;
    const copiedMessage = message[Math.floor(Math.random() * 6)];

    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div className={classes.colorBox} style={{ background }}>
          <div
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
            style={{ background }}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1 className={classes.textColor}>{copiedMessage}</h1>
            <p className={classes.textColor}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.textColor}>{name}</span>
            </div>
            <button type="button" className={classes.copyButton}>
              Copy
            </button>
          </div>
          {showMore && (
            <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
