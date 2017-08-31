import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Field, reduxForm, reducer } from 'redux-form';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import HomeContainer from './app/Containers/Home/Home.container';
import MainContainer from './app/Containers/Main/Main.container';
import LoginContainer from './app/Containers/Login/Login.container';
import RegisterContainer from './app/Containers/Register/Register.container';
import SplashContainer from './app/Containers/Splash/Splash.container';

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

const App = ({ navigation: { navigate } }) => (
  <Provider store={store}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => { navigate('Home'); }}><Text>Home</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigate('Login'); }}><Text>Login</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigate('Register'); }}><Text>Register</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigate('Main'); }}><Text>Main</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigate('Splash'); }}><Text>Splash</Text></TouchableOpacity>
    </View>
  </Provider>
);

const rootNavigator = StackNavigator({
  App: { screen: App },
  Home: { screen: HomeContainer },
  Login: { screen: LoginContainer },
  Register: { screen: RegisterContainer },
  Main: { screen: MainContainer },
  Splash: { screen: SplashContainer }
});

export default rootNavigator;
