import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Button from '../../Components/FormButton/FormButton.component';

import styles from './Home.container.styles';
import navPropTypes from '../../PropTypes/Navigation.propTypes';
import routeName from '../../Navigation/RouteConfigs/Route.config';

export default class HomeContainer extends Component {
  _onLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Authentication.Login);
  }

  _onRegisterPress = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Root.Registration);
  }

  render() {
    return (
      <View style={styles._container}>
        <Header />
        <View style={styles._btncontainer}>
          <Button
            onPress={this._onLoginPress}
            text={'Login'}
            btnStyle={styles._btn}
            textStyle={styles._btnText}
          />
          <Button
            onPress={this._onRegisterPress}
            text={'Register'}
            btnStyle={styles._btn}
            textStyle={styles._btnText}
          />
        </View>
      </View>
    );
  }
}

HomeContainer.propTypes = navPropTypes;
