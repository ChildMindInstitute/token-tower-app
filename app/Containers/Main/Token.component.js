import React, { Component } from 'react';
import { Animated } from 'react-native';

import images from '../../Resources/Images';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import formPropTypes from '../../PropTypes/Form.propTypes';
import { getPhotoById } from '../../Utilities/Photos.utils';

class Token extends Component {
  constructor() {
    super();
    this.fadeAnim = new Animated.Value(0);
    this.state = {};
  }

  componentWillMount() {
    const { imgUri } = this.props;
    getPhotoById(imgUri, (data = []) => {
      this.setState({ base64: data[0] && data[0].base64 });
    });
  }

  componentDidMount() {
    Animated.timing(this.fadeAnim, { toValue: 1, duration: 1000 })
      .start(this._onAnimateFinished);
  }

  _getAnimateStyle = () => ({
    width: 80,
    height: this.props.shouldScale ? undefined : 80,
    flex: this.props.shouldScale ? 1 : undefined,
    transform: [{
      translateY: this.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-999, 0]
      })
    }]
  });

  _onAnimateFinished = async () => {
    const { isLast, canAnimation } = this.props;
    if (isLast && canAnimation) await soundUtils.play(Sounds.coinDrop);
  };

  render() {
    const { base64 } = this.state;
    const { imgUri } = this.props;
    let img;
    if (imgUri) {
      if (base64) img = { uri: base64 };
      else return null;
    } else img = images.coinEmpty;

    return (
      <Animated.Image
        resizeMode={'contain'}
        source={img}
        style={this._getAnimateStyle()}
      />
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
