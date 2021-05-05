// dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

// component
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(value) {
    this.setState({ format: value });
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
    const { paletteName, emoji,id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox key={color.name} name={color.name} background={color[format]} />
    ));
    return (
      <div className="singleColorBox Palette">
        {/* navbar goes here */}
        <Navbar handleChange={this.changeFormat} />
        <div className="singleColorBox Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
