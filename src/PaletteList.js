import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map((palette) => (
          <div>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default PaletteList;
