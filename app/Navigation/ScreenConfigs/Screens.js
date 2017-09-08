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

const TestPage = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => { navigate('Home'); }}><Text>Home</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Login'); }}><Text>Login</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('RegisterPermission'); }}><Text>Register</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Main'); }}><Text>Main</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Splash'); }}><Text>Splash</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Setting'); }}><Text>Setting</Text></TouchableOpacity>
  </View>
);
const Test = { screen: TestPage };
const Home = { screen: HomeContainer };
const Login = { screen: LoginContainer };
const RegisterPermission = { screen: RegisterPermissionContainer };
const RegisterForm = { screen: RegisterFormContainer };
const RegisterWelcome = { screen: RegisterWelcomeContainer };
const Main = { screen: MainContainer };
const Splash = { screen: SplashContainer };
const Setting = { screen: SettingContainer };
const Prize = { screen: PrizeContainer };
const ForgotPassword = { screen: ForgotPasswordContainer };

export default {
  Test,
  Home,
  Login,
  RegisterPermission,
  RegisterForm,
  RegisterWelcome,
  Main,
  Splash,
  Setting,
  Prize,
  ForgotPassword
};
