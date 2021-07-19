import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/SingleColorPaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
    this.shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  gatherShades(palette, colorToFilter) {
    let shades = [];
    // eslint-disable-next-line react/destructuring-assignment
    const { colors } = this.props.palette;

    // eslint-disable-next-line guard-for-in
    for (const key in colors) {
      shades = shades.concat(colors[key].filter((color) => color.id === colorToFilter));
    }
    return shades.slice(1);
  }

  render() {
    const { classes, palette } = this.props;
    const { paletteName, emoji, id } = palette;
    const { format } = this.state;
    const colorBoxes = this.shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        rgbArray={color.rgbArray}
        showMore={false}
      />
    ));
    return (
      <div className={classes.palette}>
        {/* navbar goes here */}
        <Navbar handleChange={this.changeFormat} />
        {/* color boxes goes here */}
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className={classes.backButton}>
              Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
