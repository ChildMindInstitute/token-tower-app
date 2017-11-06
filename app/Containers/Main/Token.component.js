import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import images from '../../Resources/Images';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import styles from './Token.component.styles';

import formPropTypes from '../../PropTypes/Form.propTypes';
import { getPhotoById } from '../../Utilities/Photos.utils';

const bouncingEntrances = ['bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight'];

class Token extends Component {
  constructor() {
    super();
    this.state = {};
    this.randomAnimated = bouncingEntrances[Math.floor(Math.random() * 5)];
  }

  componentDidMount() {
    const { imgUri } = this.props;
    getPhotoById(imgUri, (data = []) => {
      this.setState({ base64: data[0] && data[0].base64 });
    });
  }

  componentDidUpdate() {
    const { base64 } = this.state;
    if (base64) {
      if (this.img) {
        this.img[this.randomAnimated]()
          .then(() => this._onAnimateFinished())
          .then(() => this.img && this.img.flash());
      }
    }
  }

  _onAnimateFinished = async () => {
    const { isLast, canAnimation } = this.props;
    if (isLast && canAnimation) await soundUtils.play(Sounds.coinDrop);
  };

  _getImgRef = (ref) => { this.img = ref; };

  render() {
    const { base64 } = this.state;
    const { imgUri, number, shouldScale } = this.props;

    let img;
    if (imgUri) {
      if (base64) img = { uri: base64 };
      else return null;
    } else img = images.coinEmpty;

    const animateStyle = [styles.container, shouldScale && { flex: 1, alignItems: undefined }];
    const imgStyle = {
      width: 70,
      height: shouldScale ? undefined : 70,
      flex: shouldScale ? 1 : undefined
    };

    return (
      <Animatable.View style={animateStyle} ref={this._getImgRef}>
        <Text style={styles.text}>{number}</Text>
        <Image resizeMode={'contain'} source={img} style={imgStyle} />
      </Animatable.View>
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
