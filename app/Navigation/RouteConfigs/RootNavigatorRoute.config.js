import SubNavigators from '../SubNavigatorConfig/SubNavigator.config';
import routesName from './Route.config';

const {
  Root: { Authentication, MainUser, Registration, TokenTotem, TokenTotemTutorial, Config }
} = routesName;

const {
  AuthenticationNavigator, MainUserNavigator,
  RegistrationNavigator,
  TokenTotemNavigator, TokenTotemTutorialNavigator,
  ConfigNavigator
} = SubNavigators;

export default {
  [Authentication]: { screen: AuthenticationNavigator, path: Authentication },
  [MainUser]: { screen: MainUserNavigator, path: MainUser },
  [Registration]: { screen: RegistrationNavigator, path: Registration },
  [TokenTotem]: { screen: TokenTotemNavigator, path: TokenTotem },
  [TokenTotemTutorial]: { screen: TokenTotemTutorialNavigator, path: TokenTotemTutorial },
  [Config]: { screen: ConfigNavigator, path: Config }
};
