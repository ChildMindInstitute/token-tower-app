import React from 'react';
import propTypes from 'prop-types';
import { createIconSetFromFontello } from '@expo/vector-icons';

import fontelloConfig from '../../Assets/Fonts/TokenTowerIcons/config.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'icon');

const FontIcon = ({ name, size, color, style }) => (
  <Icon name={name} size={size} color={color} style={style} />
);

FontIcon.defaultProps = {
  size: 25,
  color: 'black'
};

FontIcon.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
  style: propTypes.object
};

export default FontIcon;
