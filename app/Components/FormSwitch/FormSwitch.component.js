import React from 'react';
import { Switch } from 'react-native';

import formPropType from '../../PropTypes/Form.propTypes';

const FormSwitch = ({ input: { value, onChange } }) => (
  <Switch value={value} onValueChange={onChange} />
);

FormSwitch.propTypes = formPropType;

export default FormSwitch;
