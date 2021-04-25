// dependencies
import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

// styles
import "./ColorBox.css";
class ColorBox extends Component {
  static defaultProps = {
    copyMessage: [
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
      }, 1600)
    );
  }
  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    const copiedMessage = this.props.copyMessage[
      Math.floor(Math.random() * 6)
    ];
    return (
      <CopyToClipboard text={name} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>{copiedMessage}</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
