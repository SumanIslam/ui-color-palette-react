// dependencies
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
// components
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
// styles
import styles from './styles/PaletteStyles';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
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
    const { classes, palette } = this.props;
    const { colors, paletteName, emoji, id } = palette;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        paletteId={id}
        colorId={color.id}
        showMore
        rgbArray={color.rgbArray}
      />
    ));

    return (
      <div className={classes.palette}>
        {/* navbar goes here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingSlider
          showingBack
        />
        {/* color boxes goes here */}
        <div className={classes.colors}>{colorBoxes}</div>
        {/* footer goes here */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
