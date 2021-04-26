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
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    ));
    
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <Navbar level={level} changeLevel={this.changeLevel} />
        {/* colorboxes goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
