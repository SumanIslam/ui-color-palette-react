import React, { Component } from "react";

// styles
import "./ColorBox.css";
class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div className="ColorBox" style={{ background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
