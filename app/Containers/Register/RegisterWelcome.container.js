import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import SubmitBtn from '../../Components/FormButton/FormButton.component';

import styles from './RegisterWelcome.container.styles';

export default class RegisterWelcomeContainer extends Component {
  componentDidMount() {

  }

  _onNext = () => {
    const { navigate } = this.props.navigation;
    navigate('Setting');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={'horizontal'} />
          <View style={styles.content}>
            <Text style={styles.h1WelcomeText}>
              Almost there!
            </Text>
            <Text style={styles.welcomeText}>
              Please check your email to confirm your registration
            </Text>
          </View>
        </View>
        <SubmitBtn onPress={this._onNext} text={'NEXT'} />
      </View>
    );
  }
}
