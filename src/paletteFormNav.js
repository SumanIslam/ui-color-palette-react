// dependencies
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      // eslint-disable-next-line react/destructuring-assignment
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { newPaletteName } = this.state;
    const { classes, open, handleDrawerOpen, submitPallete } = this.props;
    return (
      <div>
        <CssBaseline />
        {/* app bar goes here */}
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            {/* app bar title and buttons goes here */}
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>

            <div className={classes.toolbarButton}>
              <Link to="/">
                <Button
                  className={classes.buttonFontSize}
                  style={{ marginRight: '0.5rem' }}
                  variant="contained"
                  color="secondary"
                >
                  Go Back
                </Button>
              </Link>

              <ValidatorForm onSubmit={() => submitPallete(newPaletteName)}>
                <TextValidator
                  autoComplete="off"
                  placeholder="Palette name"
                  className={classes.textValidator}
                  value={newPaletteName}
                  name="newPaletteName"
                  onChange={this.handleChange}
                  validators={['required', 'isPaletteNameUnique']}
                  errorMessages={['this field is required', 'palette name must be unique']}
                />
                <Button
                  className={classes.buttonFontSize}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Save Palette
                </Button>
              </ValidatorForm>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;
