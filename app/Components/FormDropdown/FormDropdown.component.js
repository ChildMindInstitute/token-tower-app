import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';

import styles from './FormDropdown.component.styles';

import formPropType from '../../PropTypes/Form.propTypes';

const FormDropdown = (props) => {
  const {
    meta: { error, touched },
    input: { value, onChange },
    containerStyle, style,
    textStyle, dropdownStyle, dropdownTextStyle,
    options
  } = props;

  const onSelect = (rowID, rowData) => {
    onChange(rowData);
  };

  return (
    <View style={containerStyle}>
      <View style={styles.innerContainer}>
        <ModalDropdown
          style={[style, touched && error && styles.errorInput]} textStyle={textStyle}
          dropdownStyle={dropdownStyle} dropdownTextStyle={dropdownTextStyle}
          defaultValue={value} onSelect={onSelect}
          options={options}
        />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

FormDropdown.propTypes = {
  ...formPropType,
  containerStyle: propTypes.object,
  style: propTypes.object,
  textStyle: propTypes.object,
  dropdownStyle: propTypes.object,
  dropdownTextStyle: propTypes.object,
  options: propTypes.arrayOf(propTypes.string)
};

export default FormDropdown;
