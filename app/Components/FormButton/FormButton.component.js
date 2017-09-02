import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './FormButton.component.styles';

const FormButton = props => (
  <TouchableOpacity onPress={props.onPress} style={props.btnStyle}>
    <Text style={props.textStyle || styles.submitBtn}>{props.text || 'SUBMIT'}</Text>
  </TouchableOpacity>
);

export default FormButton;
