import React from 'react';
import { View } from 'react-native';
import { createNavigator, TabRouter, addNavigationHelpers } from 'react-navigation';

import TopNotification from '../../Containers/TopNotification/TopNotification.container';
import LoadingMask from '../../Containers/LoadingMask/LoadingMask.container';
import Drawer from '../../Containers/SideMenu/SideMenu.container';

import Routes from '../RouteConfigs/RootNavigatorRoute.config';
import navPropTypes from '../../PropTypes/Navigation.propTypes';
import styles from './CustomNavigator.component.styles';

const WrapperSceneView = (props) => {
  const { router, navigation: { state: { routes, index }, dispatch }, screenProps } = props;

  const ChildComponent = router.getComponentForRouteName(routes[index].routeName);
  const childProps = {
    screenProps, navigation: addNavigationHelpers({ dispatch, state: routes[index] })
  };

  return (
    <View style={styles.container}>
      <Drawer {...props}>
        <ChildComponent {...childProps} />
        <TopNotification />
        <LoadingMask />
      </Drawer>
    </View>
  );
};

WrapperSceneView.propTypes = navPropTypes;

export default createNavigator(TabRouter(Routes))(WrapperSceneView);
