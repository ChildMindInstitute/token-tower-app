import React from 'react';
import propTypes from 'prop-types';
import { createIconSetFromFontello } from '@expo/vector-icons';

import fontelloConfig from '../../Assets/Fonts/TokenTotemIcons/config.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'icon');

const FontIcon = ({ name, size, color }) => (
  <Icon name={name} size={size} color={color} />
);

FontIcon.defaultProps = {
  size: 25,
  color: 'black'
};

FontIcon.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
  color: propTypes.string.isRequired
};

export default FontIcon;
