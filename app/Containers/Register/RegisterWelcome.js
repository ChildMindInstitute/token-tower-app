import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './Register.container.styles';

export default class RegisterWelcomeContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Header direction={'horizontal'} />
        <Text style={styles.h1WelcomeText}>
          Almost there!
        </Text>
        <Text style={styles.welcomeText}>
        Please check your email to confirm your registration
        </Text>
      </View>
    );
  }
}
