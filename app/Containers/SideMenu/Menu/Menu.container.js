import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import navPropTypes from '../../../Navigation/NavPropTypes/Navigation.propTypes';

const Menu = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, width: 200, alignItems: 'center', justifyContent: 'center', backgroundColor:'yellow' }}>
    <TouchableOpacity onPress={() => { navigate('Authentication'); }}><Text>Home</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Login'); }}><Text>Login</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Registration'); }}><Text>Register</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Main'); }}><Text>Main</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('TokenTotem'); }}><Text>Splash</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('Setting'); }}><Text>Setting</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('MainUserSelection'); }}><Text>MainUserSelection</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { navigate('TokenTotemTutorial'); }}><Text>Tutorial</Text></TouchableOpacity>
  </View>
);

Menu.propTypes = navPropTypes;

export default Menu;
