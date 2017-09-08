import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import Screens from '../ScreenConfigs/Screens';

import styles from './RootNavigator.component.styles';

const StackNavigatorComponent = StackNavigator(Screens, {
  navigationOptions: { ...styles }
});

// TODO: add loading mask
const RootNavigator = () => (
  <View style={{ flex: 1 }}>
    <StackNavigatorComponent />
    <Spinner visible={false} textContent="Loading" textStyle={{ color: '#FFF' }} />
  </View>
);

export default RootNavigator;
