import { StackNavigator } from 'react-navigation';

import Screens from '../ScreenConfigs/Screen.config';
import routesName from '../RouteConfigs/Route.config';
import { navigationOptions } from '../CommonConfigs/Navigation.config';

const {
  Authentication: { Test, Home, Login, MainUserSelection, ForgotPassword },
  Registration: { RegisterPermission, RegisterForm, RegisterWelcome, Setting },
  TokenTotem: { Splash, Main, Prize },
  TokenTotemTutorial: { Tutorial }
} = routesName;

const AuthenticationNavigator = StackNavigator({
  [Test]: Screens.TestScreen,
  [Home]: Screens.HomeScreen,
  [Login]: Screens.LoginScreen,
  [MainUserSelection]: Screens.MainUserSelectionScreen,
  [ForgotPassword]: Screens.ForgotPasswordScreen
}, navigationOptions);

const RegistrationNavigator = StackNavigator({
  [RegisterPermission]: Screens.RegisterPermissionScreen,
  [RegisterForm]: Screens.RegisterFormScreen,
  [RegisterWelcome]: Screens.RegisterWelcomeScreen,
  [Setting]: Screens.SettingScreen
}, navigationOptions);

const TokenTotemNavigator = StackNavigator({
  [Splash]: Screens.SplashScreen,
  [Main]: Screens.MainScreen,
  [Prize]: Screens.PrizeScreen
}, navigationOptions);

const TokenTotemTutorialNavigator = StackNavigator({
  [Tutorial]: Screens.TutorialScreen
}, navigationOptions);

export default {
  AuthenticationNavigator,
  RegistrationNavigator,
  TokenTotemNavigator,
  TokenTotemTutorialNavigator
};
