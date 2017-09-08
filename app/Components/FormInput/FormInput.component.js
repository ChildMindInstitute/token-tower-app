import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './FormInput.component.styles';

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
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder={placeholder}
            style={[inputStyle, touched && error && styles.errorInput]}
            value={value}
            onChangeText={this._onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize={'none'}
            underlineColorAndroid="transparent"
            keyboardType={keyboardType}
          />
          {touched && error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </View>
    );
  }
}

export default FormInput;
