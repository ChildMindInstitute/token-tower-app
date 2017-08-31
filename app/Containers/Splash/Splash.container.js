import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './Splash.container.styles';

export default class SplashContainer extends Component {
  componentDidMount() { }

  render() {

    return (
      <View>
        <Header direction={'horizontal'} />
      </View>
    );
  }
}
