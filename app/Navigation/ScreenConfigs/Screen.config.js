import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import HomeContainer from '../../../app/Containers/Home/Home.container';
import MainContainer from '../../../app/Containers/Main/Main.container';
import LoginContainer from '../../../app/Containers/Login/Login.container';
import RegisterPermissionContainer from '../../../app/Containers/Register/RegisterPermission.container';
import RegisterFormContainer from '../../../app/Containers/Register/RegisterForm.container';
import RegisterWelcomeContainer from '../../../app/Containers/Register/RegisterWelcome.container';
import SplashContainer from '../../../app/Containers/Splash/Splash.container';
import SettingContainer from '../../../app/Containers/Setting/Setting.container';
import PrizeContainer from '../../../app/Containers/Prize/Prize.container';
import ForgotPasswordContainer from '../../../app/Containers/ForgotPassword/ForgotPassword.container';
import MainUserSelectionContainer from '../../../app/Containers/MainUserSelection/MainUserSelection.container';

import routesName from '../RouteConfigs/Route.config';

const { Authentication: { Test, Home, Login, ForgotPassword, MainUserSelection }
  , Registration: { RegisterPermission, RegisterForm, RegisterWelcome, Setting },
  TokenTotem: { Splash, Main, Prize } } = routesName;

const TestPage = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => { navigate('Home'); }}><Text>Home</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Login'); }}><Text>Login</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Registration'); }}><Text>Register</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Main'); }}><Text>Main</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('TokenTotem'); }}><Text>Splash</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Setting'); }}><Text>Setting</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('MainUserSelection'); }}><Text>MainUserSelection</Text></TouchableOpacity>
  </View>
);

const TestScreen = { screen: TestPage, path: Test };
const HomeScreen = { screen: HomeContainer, path: Home };
const LoginScreen = { screen: LoginContainer, path: Login };
const ForgotPasswordScreen = { screen: ForgotPasswordContainer, path: ForgotPassword };
const MainUserSelectionScreen = { screen: MainUserSelectionContainer, path: MainUserSelection };

const RegisterPermissionScreen = { screen: RegisterPermissionContainer, path: RegisterPermission };
const RegisterFormScreen = { screen: RegisterFormContainer, path: RegisterForm };
const RegisterWelcomeScreen = { screen: RegisterWelcomeContainer, path: RegisterWelcome };
const SettingScreen = { screen: SettingContainer, path: Setting };

const MainScreen = { screen: MainContainer, path: Main };
const SplashScreen = { screen: SplashContainer, path: Splash };
const PrizeScreen = { screen: PrizeContainer, path: Prize };


export default {
  TestScreen,
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
  MainUserSelectionScreen
};
