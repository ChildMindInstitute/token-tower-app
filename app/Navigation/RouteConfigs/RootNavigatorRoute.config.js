import SubNavigators from '../SubNavigatorConfig/SubNavigator.config';

import routesName from './Route.config';

const { Root: { Authentication, Registration, TokenTotem } } = routesName;
const { AuthenticationNavigator, RegistrationNavigator, MainNavigator } = SubNavigators;

export default {
  [Authentication]: { screen: AuthenticationNavigator, path: Authentication },
  [Registration]: { screen: RegistrationNavigator, path: Registration },
  [TokenTotem]: { screen: MainNavigator, path: TokenTotem }
};
