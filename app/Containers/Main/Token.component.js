import React, { Component } from 'react';
import { View, Animated } from 'react-native';

import images from '../../Resources/Images';
import styles from './Token.component.style';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import formPropTypes from '../../PropTypes/Form.propTypes';

class Token extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidUpdate() {
    const { putCoint, fadeAnim } = this.state;

    if (!putCoint) return;

    Animated.timing(fadeAnim, { toValue: 1, duration: 1000 })
      .start(this._onAnimateFinished);
  }

  _getAnimateStyle = () => ({
    width: null,
    height: null,
    flex: 1,
    // opacity: putCoint ? 1 : 0,
    // transform: [{
    //   translateY: fadeAnim.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, this._getDistance()]
    //   })
    // }]
  });

  _onAnimateFinished = async () => {
    this.setState({ putCoint: false, fadeAnim: new Animated.Value(0) });
    await soundUtils.play(Sounds.coinDrop);
  };

  _initCoint = (ref) => { this.coin = ref; }

  _initCoinLayout = () => {
    const { coin } = this;
    if (coin && coin.measure) {
      coin.measure((fx, fy, width, height, px, py) => {
        this.coinFrame = { fx, fy, width, height, px, py };
      });
    }
  }

  render() {
    return (
      <View ref={this._initCoint} onLayout={this._initCoinLayout} style={styles.container}>
        <Animated.Image
          resizeMode={'contain'}
          source={images.k1}
          style={this._getAnimateStyle()}
        />
      </View>
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
