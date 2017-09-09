import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Button from '../../Components/FormButton/FormButton.component';

import styles from './Home.container.styles';
import propTypes from '../../Navigation/NavPropTypes/Navigation.propTypes';

export default class HomeContainer extends Component {
  _onLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  _onRegisterPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Registration');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Button
          onPress={this._onLoginPress}
          text={'Login'}
          btnStyle={styles.btn}
          textStyle={styles.btnText}
        />
        <Button
          onPress={this._onRegisterPress}
          text={'Register'}
          btnStyle={styles.btn}
          textStyle={styles.btnText}
        />
      </View>
    );
  }
}

HomeContainer.propTypes = propTypes;
