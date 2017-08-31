import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './Home.container.styles';
import LoginContainer from '../Login/Login.container';
import RegisterContainer from '../Register/Register.container';

const homeNavigator = StackNavigator({
  Login: { screen: LoginContainer },
  Register: { screen: RegisterContainer },
});
export default class HomeContainer extends Component {
  componentDidMount() {

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style= {{alignItems: 'center'}}>
        <Header />
        <TouchableOpacity onPress={() => navigate('Login')} style={styles.btn}>
          <Text style={styles.btnText} >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Register')} style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
