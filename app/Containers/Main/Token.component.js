import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import images from '../../Resources/Images';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import styles from './Token.component.styles';

import formPropTypes from '../../PropTypes/Form.propTypes';
import { getPhotoById } from '../../Utilities/Photos.utils';

class Token extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { imgUri } = this.props;
    getPhotoById(imgUri, (data = []) => {
      this.setState({ base64: data[0] && data[0].base64 });
    });
    if (this.img) {
      this.img.bounceInDown()
        .then(() => this._onAnimateFinished())
        .then(() => this.img && this.img.rubberBand())
        .then(() => this.img && this.img.rotate())
        .catch(() => { });
    }
  }

  _getAnimateStyle = (number) => {
    const style = {
      1: {
        width: 45,
        height: 45
      },
      5: {
        width: 55,
        height: 55
      },
      10: {
        width: 60,
        height: 60
      },
      25: {
        width: 70,
        height: 70
      },
      50: {
        width: 85,
        height: 85
      },
      100: {
        width: 95,
        height: 95
      }
    };

    return style[number];
  };

  _onAnimateFinished = async () => {
    const { isLast, canAnimation } = this.props;
    if (isLast && canAnimation) await soundUtils.play(Sounds.coinDrop);
  };

  _getImgRef = (ref) => { this.img = ref; };

  render() {
    const { base64 } = this.state;
    const { imgUri, number } = this.props;

    let img;
    if (imgUri) {
      if (base64) img = { uri: base64 };
      else return null;
    } else img = images.coinEmpty;

    return (
      <Animatable.View style={styles.container} ref={this._getImgRef}>
        <Text style={styles.text}>{number}</Text>
        <Image
          resizeMode={'contain'}
          source={img}
          style={this._getAnimateStyle(number)}
        />
      </Animatable.View>
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
