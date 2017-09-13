import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import propTypes from 'prop-types';

import styles from './FormInput.component.styles';
import formPropType from '../../PropTypes/Form.propTypes';

class FormInput extends Component {
  _onChangeText = (value) => {
    const { onChange } = this.props.input;
    onChange(value);
  }

  render() {
    const {
      meta: { error, touched },
      input: { value },
      inputStyle, containerStyle,
      placeholder,
      secureTextEntry, keyboardType
    } = this.props;

    return (
      <View style={containerStyle}>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder={placeholder}
            style={[inputStyle, touched && error && styles.errorInput]}
            value={value} keyboardType={keyboardType}
            onChangeText={this._onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize={'none'} underlineColorAndroid="transparent"
          />
          {touched && error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </View>
    );
  }
}

FormInput.propTypes = {
  ...formPropType,
  inputStyle: propTypes.object,
  containerStyle: propTypes.object,
  placeholder: propTypes.string,
  secureTextEntry: propTypes.bool,
  keyboardType: propTypes.string
};

export default FormInput;
