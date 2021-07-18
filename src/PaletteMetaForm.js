import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
  state = {
    open: false,
    newPaletteName: '',
  };

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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, newPaletteName } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { classes, submitPallete } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Save Palette
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <ValidatorForm onSubmit={() => submitPallete(newPaletteName)}>
            <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter a new name for your beautiful Palette, make sure it&apos;s unique!
              </DialogContentText>

              <Picker />

              <TextValidator
                autoComplete="off"
                placeholder="Palette name"
                value={newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['this field is required', 'palette name must be unique']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                className={classes.buttonFontSize}
                variant="contained"
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
