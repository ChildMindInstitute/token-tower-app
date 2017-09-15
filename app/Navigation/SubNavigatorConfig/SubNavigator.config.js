import { StackNavigator } from 'react-navigation';

import Screens from '../ScreenConfigs/Screen.config';
import routesName from '../RouteConfigs/Route.config';
import { navigationOptions } from '../CommonConfigs/Navigation.config';

const {
  Authentication: { Home, Login, MainUserSelection, ForgotPassword },
  Registration: { RegisterPermission, RegisterForm, RegisterWelcome, Setting },
  TokenTotem: { Splash, Main, Prize, TakePhoto, ReviewPhoto },
  TokenTotemTutorial: { Tutorial }
} = routesName;

const { HomeScreen, LoginScreen, MainUserSelectionScreen, ForgotPasswordScreen,
  RegisterPermissionScreen, RegisterFormScreen, RegisterWelcomeScreen, SettingScreen,
  SplashScreen, MainScreen, PrizeScreen,
  TutorialScreen, TakePhotoScreen, ReviewPhotoScreen
} = Screens;

const AuthenticationNavigator = StackNavigator({
  [Home]: HomeScreen,
  [Login]: LoginScreen,
  [MainUserSelection]: MainUserSelectionScreen,
  [ForgotPassword]: ForgotPasswordScreen
}, navigationOptions);

const RegistrationNavigator = StackNavigator({
  [RegisterPermission]: RegisterPermissionScreen,
  [RegisterForm]: RegisterFormScreen,
  [RegisterWelcome]: RegisterWelcomeScreen,
  [Setting]: SettingScreen
}, navigationOptions);

const TokenTotemNavigator = StackNavigator({
  [Splash]: SplashScreen,
  [Main]: MainScreen,
  [Prize]: PrizeScreen,
  [TakePhoto]: TakePhotoScreen,
  [ReviewPhoto]: ReviewPhotoScreen
}, navigationOptions);

const TokenTotemTutorialNavigator = StackNavigator({
  [Tutorial]: TutorialScreen
}, navigationOptions);

export default {
  AuthenticationNavigator,
  RegistrationNavigator,
  TokenTotemNavigator,
  TokenTotemTutorialNavigator
};
