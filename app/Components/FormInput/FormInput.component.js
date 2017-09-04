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
      secureTextEntry, keyboardType
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
          keyboardType={keyboardType}
        />
      </View>
    );
  }
};

export default FormInput;
