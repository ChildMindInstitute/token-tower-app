import React, { Component } from 'react';
import { Animated } from 'react-native';

import images from '../../Resources/Images';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import formPropTypes from '../../PropTypes/Form.propTypes';

class Token extends Component {
  constructor() {
    super();
    this.fadeAnim = new Animated.Value(0);
  }

  componentWillMount() {
    Animated.timing(this.fadeAnim, { toValue: 1, duration: 1000 })
      .start(this._onAnimateFinished);
  }

  _getAnimateStyle = () => ({
    width: 80,
    flex: 1,
    transform: [{
      translateY: this.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-999, 0]
      })
    }]
  });

  _onAnimateFinished = async () => {
    const { isLast } = this.props;
    if (isLast) await soundUtils.play(Sounds.coinDrop);
  };

  render() {
    return (
      <Animated.Image
        resizeMode={'contain'}
        source={images.k1}
        style={this._getAnimateStyle()}
      />
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
