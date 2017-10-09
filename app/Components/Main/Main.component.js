import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';

import Btn from '../FormButton/FormButton.component';
import Bottom from './MainBottom.component';

import images from '../../Resources/Images';
import styles from './Main.component.styles';

import config from './Main.component.config';
import soundUtils from '../../Utilities/Sound.utils';
import Sounds from '../../Resources/Sounds';

class MainComponent extends Component {
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

  _onAnimateFinished = async () => {
    this.setState({ putCoint: false, fadeAnim: new Animated.Value(0) });
    await soundUtils.play(Sounds.coinDrop);
  };

  _onMinusPress = () => {
    const { onMinusPress } = this.props;
    if (onMinusPress) {
      onMinusPress();

      const { removeCoin } = this.state;
      if (!removeCoin) {
        this.setState({ removeCoin: true });
      }
    }
  }

  _onPigPress = () => {
    const { putCoint } = this.state;
    if (!putCoint) this.setState({ putCoint: true });
  }

  _onPlusPress = () => {
    const { onPlusPress } = this.props;
    if (onPlusPress) {
      onPlusPress();

      const { putCoint } = this.state;
      if (!putCoint) {
        this.setState({ putCoint: true });
      }
    }
  }

  _getCoinImgInstance = (instance) => {
    this.coinImg = instance;
  }

  _onCoinImgLayout = () => {
    const { coinImg } = this;
    if (coinImg && coinImg.measure) {
      coinImg.measure((fx, fy, width, height, px, py) => {
        this.coinImg = { fx, fy, width, height, px, py };
      });
    }
  }

  _getPigImgInstance = (instance) => {
    this.pigImg = instance;
  }

  _onPigImgLayout = () => {
    const { pigImg } = this;
    if (pigImg && pigImg.measure) {
      pigImg.measure((fx, fy, width, height, px, py) => {
        this.pigImg = { fx, fy, width, height, px, py };
      });
    }
  }

  _getDistance = () => {
    const { pigImg, coinImg } = this;
    return (pigImg && coinImg) ? pigImg.py - coinImg.py : 0;
  }

  render() {
    const {
      onCameraPress,
      onTokenPress,
      onPrizePress,
      pigStyle,
      cameraStyle,
      minusIconColor,
      tokenStyle,
      plusIconColor,
      presentStyle
    } = this.props;

    const { putCoint, fadeAnim } = this.state;

    const animateStyle = {
      width: 150,
      height: 150,
      opacity: putCoint ? 1 : 0,
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this._getDistance()]
        })
      }]
    };

    return (
      <Image source={images.firstbackground} style={styles.bgrContainer}>
        <View style={styles.topContainer}>
          <Image source={images.token} />
          <View ref={this._getCoinImgInstance} onLayout={this._onCoinImgLayout}>
            <Animated.Image
              source={images.k1}
              style={animateStyle}
            />
          </View>
          <Btn onPress={this._onPigPress}>
            <Image
              source={images.pig} style={pigStyle}
              ref={this._getPigImgInstance} onLayout={this._onPigImgLayout}
            />
          </Btn>
        </View>
        <Bottom
          onCameraPress={onCameraPress}
          onMinusPress={this._onMinusPress}
          onTokenPress={onTokenPress}
          onPlusPress={this._onPlusPress}
          onPrizePress={onPrizePress}
          pigStyle={pigStyle}
          cameraStyle={cameraStyle}
          minusIconColor={minusIconColor}
          tokenStyle={tokenStyle}
          plusIconColor={plusIconColor}
          presentStyle={presentStyle}
        />
      </Image>
    );
  }
}

MainComponent.propTypes = config.propTypes;

export default MainComponent;
