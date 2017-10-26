import SubNavigators from '../SubNavigatorConfig/SubNavigator.config';
import routesName from './Route.config';

const {
  Root: { Authentication, UpdateInfo, MainUser, Registration, TokenTower, TokenTowerTutorial, Config }
} = routesName;

const {
  AuthenticationNavigator,
  UpdateInfoNavigator,
  MainUserNavigator,
  RegistrationNavigator,
  TokenTowerNavigator, TokenTowerTutorialNavigator,
  ConfigNavigator
} = SubNavigators;

export default {
  [Authentication]: { screen: AuthenticationNavigator, path: Authentication },
  [UpdateInfo]: { screen: UpdateInfoNavigator, path: UpdateInfo },
  [MainUser]: { screen: MainUserNavigator, path: MainUser },
  [Registration]: { screen: RegistrationNavigator, path: Registration },
  [TokenTower]: { screen: TokenTowerNavigator, path: TokenTower },
  [TokenTowerTutorial]: { screen: TokenTowerTutorialNavigator, path: TokenTowerTutorial },
  [Config]: { screen: ConfigNavigator, path: Config }
};
