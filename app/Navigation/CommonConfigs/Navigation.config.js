import styles from './Navigation.styles';

import routesName from '../RouteConfigs/Route.config';

export const navigationOptions = {
  navigationOptions: {
    ...styles,
    headerMode: 'float'
  }
};

export const initialRouteName = routesName.Authentication.Test;
