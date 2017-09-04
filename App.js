import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer } from 'redux-form';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import HomeContainer from './app/Containers/Home/Home.container';
import MainContainer from './app/Containers/Main/Main.container';
import LoginContainer from './app/Containers/Login/Login.container';
import RegisterPermissionContainer from './app/Containers/Register/RegisterPermission.container';
import RegisterFormContainer from './app/Containers/Register/RegisterForm.container';
import RegisterWelcomeContainer from './app/Containers/Register/RegisterWelcome.container';
import SplashContainer from './app/Containers/Splash/Splash.container';
import SettingContainer from './app/Containers/Setting/Setting.container';
import PrizeContainer from './app/Containers/Prize/Prize.container';

const middleware = [
  promiseMiddleware(),
  thunk
];

const store = createStore(
  combineReducers({
    form: reducer
  }),
  compose(
    applyMiddleware(...middleware)
  )
);

const Test = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => { navigate('Home'); }}><Text>Home</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Login'); }}><Text>Login</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('RegisterPermission'); }}><Text>Register</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Main'); }}><Text>Main</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Splash'); }}><Text>Splash</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Setting'); }}><Text>Setting</Text></TouchableOpacity>
  </View>
);

const defautNavigationOptions = {
  navigationOptions: {
    headerStyle: { backgroundColor: '#FDC847' },
    headerTintColor: '#ffffff'
  }
};

const RootNavigator = StackNavigator({
  Test: { screen: Test },
  Home: { screen: HomeContainer },
  Login: { screen: LoginContainer },
  RegisterPermission: { screen: RegisterPermissionContainer },
  RegisterForm: { screen: RegisterFormContainer },
  RegisterWelcome: { screen: RegisterWelcomeContainer },
  Main: { screen: MainContainer },
  Splash: { screen: SplashContainer },
  Setting: { screen: SettingContainer },
  Prize: { screen: PrizeContainer }
}, defautNavigationOptions);


const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
