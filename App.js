import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AppContainer from './app/Containers/App/App.container';
import LoginContainer from './app/Containers/Login/Login.container';
import RegisterContainer from './app/Containers/Register/Register.container';

const Home = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => { navigate('Login'); }}><Text>Login</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Register'); }}><Text>Register</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('MainScreen'); }}><Text>Main Screen</Text></TouchableOpacity>
  </View>
);

const rootNavigator = StackNavigator({
  Home: { screen: Home },
  Login: { screen: LoginContainer },
  Register: { screen: RegisterContainer },
  MainScreen: { screen: AppContainer }
});

export default rootNavigator;
