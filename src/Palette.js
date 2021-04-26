import React, { Component } from 'react'
import { generatePalette } from "./ColorHelpers";

// styles
import './Palette.css';

// components
import ColorBox from './ColorBox';


class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox key={color.name} background={color.color}  name={color.name} />
    ))
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        {/* footer goes here */}
      </div>
    )
  }
}

export default Palette;