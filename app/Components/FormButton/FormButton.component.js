import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './FormButton.component.styles';

const FormButton = props => (
  <TouchableOpacity onPress={props.onPress} style={[styles.container, props.btnStyle]}>
    <Text style={[styles.submitBtn, props.textStyle]}>{props.text || 'SUBMIT'}</Text>
  </TouchableOpacity>
);

export default FormButton;
