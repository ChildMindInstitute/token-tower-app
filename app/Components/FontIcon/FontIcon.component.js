import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';

import fontelloConfig from '../../Assets/Fonts/TokenTotemIcons/config.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'icon');

export default ({ name, size, color }) => (
  <Icon name={name} size={20} color="black" />
);
