import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }

  gatherShades(palette, colorToFilter) {
    let shades = [];
    let colors = this.props.palette.colors;

    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter((color) => color.id === colorToFilter)
      );
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox key={color.name} name={color.name} background={color.hex} />
    ));
    return (
      <div className="Palette">
        {/* navbar goes here */}
        {/* <Navbar /> */}
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
