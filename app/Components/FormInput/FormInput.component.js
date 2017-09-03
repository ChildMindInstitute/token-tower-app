import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class FormInput extends Component {
  _onChangeText = (value) => {
    const { onChange } = this.props.input;
    onChange(value);
  }

  render() {
    const {
      input: { value },
      inputStyle, containerStyle,
      secureTextEntry
    } = this.props;

    return (
      <View style={containerStyle} >
        <TextInput
          style={inputStyle}
          value={value}
          onChangeText={this._onChangeText}
          secureTextEntry={secureTextEntry}
          autoCapitalize={'none'}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
};

export default FormInput;
