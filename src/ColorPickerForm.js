import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import rgbHex from 'rgb-hex';

class ColorPickerForm extends Component {
  state = {
    currentColor: '#800080',
    newColorName: '',
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      // eslint-disable-next-line react/destructuring-assignment
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule('isColorUnique', () =>
      // eslint-disable-next-line react/destructuring-assignment
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // set current color from chromePicker
  handleCurrentColor = (color) => {
    const newColor = `#${rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)}`;
    this.setState({ currentColor: newColor });
  };

  handleSubmit = () => {
    const { currentColor, newColorName } = this.state;
    const { addNewColor } = this.props;
    const newColor = { color: currentColor, name: newColorName };
    addNewColor(newColor);
    this.setState({ newColorName: '' });
  };

  render() {
    const { classes, isPaletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          className={classes.chromePicker}
          color={currentColor}
          onChangeComplete={this.handleCurrentColor}
          direction="vertical"
        />

        {/* color validator goes here */}
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            autoComplete="off"
            className={classes.textValidator}
            variant="filled"
            placeholder="Add a color"
            name="newColorName"
            value={newColorName}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'this field is required',
              'color name must be unique',
              'color must be unique',
            ]}
            onChange={this.handleChange}
          />
          <Button
            className={classes.buttonCenter}
            type="submit"
            variant="contained"
            color="primary"
            style={{ backgroundColor: isPaletteFull ? 'gray' : `${currentColor}` }}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
