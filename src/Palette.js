// dependencies
import React, { Component } from "react";

// styles
import "./Palette.css";

// components
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { level, format } = this.state;
    const { colors } = this.props.palette;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox key={color.name} background={color[format]} name={color.name} />
    ));

    return (
      <div className="Palette">
        {/* navbar goes here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* colorboxes goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
