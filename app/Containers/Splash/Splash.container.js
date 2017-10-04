import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import images from '../../Resources/Images';
import styles from './Splash.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Splash.container.config';

export default class SplashContainer extends Component {
  _onTouch = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.TokenTotem.Main);
  };

  _renderTreasure = () => (
    <Image
      resizeMode={'contain'}
      source={images.treasure}
      style={styles._treasure}
    />
  );

  _renderPresent = () => (
    <Image
      resizeMode={'contain'}
      source={images.present}
      style={styles._present}
    />
  );

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onTouch}>
        <View style={styles._container}>
          <Header direction={'horizontal'} />
          <View style={styles._textContainer}>
            <View style={styles._wrap}>
              <View style={styles._textBubble}>
                <Text style={styles._text}> You have 85 tokens!!!
              Only 15 more for your next PRIZE!!!
                </Text>
              </View>
            </View>
            <View style={styles._img}>
              {this._renderTreasure()}
              {this._renderPresent()}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
SplashContainer.propTypes = config.propTypes;
