import React, { Component } from "react";

// styles
import "./ColorBox.css";
class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div className="ColorBox" style={{ background: background }}>
        <div className="copy-container" />
        <div className="box-content">
          <span>{name}</span>
        </div>
      </div>
    );
  }
}

export default ColorBox;
