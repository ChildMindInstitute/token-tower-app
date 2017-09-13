import styles from './Navigation.styles';

import routesName from '../RouteConfigs/Route.config';

export const navigationOptions = {
  navigationOptions: {
    ...styles
  }
};

export const initialRouteName = routesName.Authentication.Home;
