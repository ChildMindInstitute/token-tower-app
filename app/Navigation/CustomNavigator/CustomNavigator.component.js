import React from 'react';
import { View } from 'react-native';
import { createNavigator, TabRouter, addNavigationHelpers } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import Routes from '../RouteConfigs/RootNavigatorRoute.config';

import styles from './CustomNavigator.component.styles';

const WrapperSceneView = (props) => {
  const { router, navigation: { state, dispatch }, screenProps } = props;
  const { routes, index } = state;

  const Component = router.getComponentForRouteName(routes[index].routeName);

  return (
    <View style={styles.container}>
      <Component navigation={addNavigationHelpers({ dispatch, state: routes[index] })} />
      <Spinner visible={false} textContent="Loading" textStyle={styles.spinerText} />
    </View>
  );
};

export default createNavigator(TabRouter(Routes))(WrapperSceneView);
