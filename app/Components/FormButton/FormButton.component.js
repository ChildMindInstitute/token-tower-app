import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import Constant from '../../Utilities/Constant.utils';

import styles from './FormButton.component.styles';

const FormButton = ({ btnStyle, textStyle, text, kind, onPress }) => {
  let preConainerStyle; let preTextStyle;

  if (kind === Constant.BTN.KIND.DEFAULT) {
    preConainerStyle = styles.container;
    preTextStyle = styles.submitBtn;
  } else if (kind === Constant.BTN.KIND.PLAIN) {
    preConainerStyle = undefined;
    preTextStyle = undefined;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[preConainerStyle, btnStyle]}>
      <Text style={[preTextStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

FormButton.defaultProps = {
  text: Constant.BTN.DEFAULT,
  kind: Constant.BTN.KIND.DEFAULT
};

FormButton.propTypes = {
  onPress: PropTypes.func,
  btnStyle: PropTypes.object,
  textStyle: PropTypes.object,
  text: PropTypes.string,
  kind: PropTypes.string
};

export default FormButton;
