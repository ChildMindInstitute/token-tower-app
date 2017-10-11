import React from 'react';
import { View, Text } from 'react-native';

import FontIcon from '../../Components/FontIcon/FontIcon.component';

import styles from './PermissionGrantWidget.styles';

const PermissionGrantWidget = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Grant permissions to access your camera.</Text>
    <View style={styles.iconContainer}>
      <FontIcon name={'id-card'} color="white" />
    </View>
  </View>
);

export default PermissionGrantWidget;
