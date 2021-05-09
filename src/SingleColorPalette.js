// dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

// component
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

const styles = {
  palette: {
    height: "100vh",
    overflow: "hidden",
  },
  colors: {
    height: "87vh",
  },
  backButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    border: "2px solid #ffffff33",
    borderRadius: "5px",
    padding: "0.4rem 1.8rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    textTransform: "capitalize",
    textDecoration: "none",
  },
  goBack: {
    background: "black",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
  },
};

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
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
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
