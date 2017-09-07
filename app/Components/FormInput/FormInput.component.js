import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import styles from './FormInput.component.styles';

class FormInput extends Component {
  _onChangeText = (value) => {
    const { onChange } = this.props.input;
    onChange(value);
  }

  render() {
    const {
      input: { value },
      meta: { error },
      inputStyle, containerStyle,
      placeholder,
      secureTextEntry, keyboardType
    } = this.props;

    return (
      <View style={containerStyle} >
        <TextInput
          placeholder={placeholder}
          style={[inputStyle, error && styles.errorInput]}
          value={value}
          onChangeText={this._onChangeText}
          secureTextEntry={secureTextEntry}
          autoCapitalize={'none'}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

export default FormInput;
