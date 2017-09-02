import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './Splash.container.styles';
import images from '../../Resources/Images';

export default class SplashContainer extends Component {
  componentDidMount() {

  }

  _renderTreasure = () => (
    <Image
      resizeMode={'contain'}
      source={images.treasure}
      style={styles.treasure}
    />
  );
  _renderPresent= () => (
    <Image
      resizeMode={'contain'}
      source={images.present}
      style={styles.present}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header direction={'horizontal'} />
        <View style={{flex: 1}}>
          <View style={styles.wrap}>
            <View style={styles.textBubble}>
              <Text style={styles.text}> You have 85 tokens!!!
              Only 15 more for your next PRIZE!!!
              </Text>
            </View>
          </View>
          <View style={styles.img}>
            {this._renderTreasure()}
            {this._renderPresent()}
          </View>
        </View>
      </View>
    );
  }
}
