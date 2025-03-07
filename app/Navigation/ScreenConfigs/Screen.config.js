import React from 'react';
import { HeaderBackButton } from 'react-navigation';

import HomeContainer from '../../Containers/Home/Home.container';
import MainContainer from '../../Containers/Main/Main.container';
import LoginContainer from '../../Containers/Login/Login.container';
import RegisterPermissionContainer from '../../Containers/RegisterPermission/RegisterPermission.container';
import RegisterFormContainer from '../../Containers/RegisterForm/RegisterForm.container';
import RegisterWelcomeContainer from '../../Containers/RegisterWelcome/RegisterWelcome.container';
import SplashContainer from '../../Containers/Splash/Splash.container';
import SettingContainer from '../../Containers/Setting/Setting.container';
import PrizeContainer from '../../Containers/Prize/Prize.container';
import ForgotPasswordContainer from '../../Containers/ForgotPassword/ForgotPassword.container';
import MainUserSelectionContainer from '../../Containers/MainUserSelection/MainUserSelection.container';
import TutorialContainer from '../../Containers/Tutorial/Tutorial.container';
import TakePhotoContainer from '../../Containers/TakePhoto/TakePhoto.container';
import ReviewPhotoContainer from '../../Containers/ReviewPhoto/ReviewPhoto.container';
import PickPhotoContainer from '../../Containers/PickPhoto/PickPhoto.container';
import SetInfoContainer from '../../Containers/SetInfo/SetInfo.container';
import PhotosListContainer from '../../Containers/PhotosList/PhotosList.container';
import MenuButtonContainer from '../../Containers/MenuButton/MenuButton.container';

import routesName from '../RouteConfigs/Route.config';

const { Authentication: { Home, Login, ForgotPassword },
  UpdateInfo: { SetInfo },
  MainUser: { MainUserSelection },
  Registration: { RegisterPermission, RegisterForm, RegisterWelcome },
  TokenTower: { Splash, Main, Prize, TakePhoto, ReviewPhoto, PickPhoto, PhotosList },
  TokenTowerTutorial: { Tutorial },
  Config: { Setting }
} = routesName;

const splashScreenOptions = () => ({
  headerLeft: <MenuButtonContainer />
});

const registerPermissionScreenOptions = ({ navigation: { navigate } }) => {
  const _onPress = () => navigate(routesName.Root.Authentication);

  return ({
    headerLeft: <HeaderBackButton onPress={_onPress} tintColor="black" />
  });
};

const HomeScreen = { screen: HomeContainer, path: Home };
const LoginScreen = { screen: LoginContainer, path: Login };
const ForgotPasswordScreen = { screen: ForgotPasswordContainer, path: ForgotPassword };

const SetInfoScreen = { screen: SetInfoContainer, path: SetInfo };

const MainUserSelectionScreen = { screen: MainUserSelectionContainer, path: MainUserSelection };

const RegisterPermissionScreen = {
  screen: RegisterPermissionContainer,
  path: RegisterPermission,
  navigationOptions: registerPermissionScreenOptions
};
const RegisterFormScreen = { screen: RegisterFormContainer, path: RegisterForm };
const RegisterWelcomeScreen = { screen: RegisterWelcomeContainer, path: RegisterWelcome };

const MainScreen = { screen: MainContainer, path: Main };
const SplashScreen = { screen: SplashContainer, path: Splash, navigationOptions: splashScreenOptions };
const PrizeScreen = { screen: PrizeContainer, path: Prize };

const TutorialScreen = { screen: TutorialContainer, path: Tutorial };
const TakePhotoScreen = { screen: TakePhotoContainer, path: TakePhoto };
const ReviewPhotoScreen = { screen: ReviewPhotoContainer, path: ReviewPhoto };
const PickPhotoScreen = { screen: PickPhotoContainer, path: PickPhoto };
const PhotosListScreen = { screen: PhotosListContainer, path: PhotosList };

const SettingScreen = { screen: SettingContainer, path: Setting };

export default {
  HomeScreen,
  LoginScreen,
  RegisterPermissionScreen,
  RegisterFormScreen,
  RegisterWelcomeScreen,
  MainScreen,
  SplashScreen,
  SettingScreen,
  PrizeScreen,
  ForgotPasswordScreen,
  SetInfoScreen,
  MainUserSelectionScreen,
  TutorialScreen,
  TakePhotoScreen,
  ReviewPhotoScreen,
  PickPhotoScreen,
  PhotosListScreen
};
