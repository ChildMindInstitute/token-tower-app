import SubNavigators from '../SubNavigatorConfig/SubNavigator.config';

import routesName from './Route.config';

const { Root: { Authentication, Registration, TokenTotem, TokenTotemTutorial } } = routesName;
const {
  AuthenticationNavigator, RegistrationNavigator,
  TokenTotemNavigator, TokenTotemTutorialNavigator
} = SubNavigators;

export default {
  [Authentication]: { screen: AuthenticationNavigator, path: Authentication },
  [Registration]: { screen: RegistrationNavigator, path: Registration },
  [TokenTotem]: { screen: TokenTotemNavigator, path: TokenTotem },
  [TokenTotemTutorial]: { screen: TokenTotemTutorialNavigator, path: TokenTotemTutorial }
};
