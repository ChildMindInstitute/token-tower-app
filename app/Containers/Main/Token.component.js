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

      if (this.img) {
        this.img.bounceInDown()
          .then(() => this._onAnimateFinished())
          .then(() => this.img && this.img.rubberBand())
          .then(() => this.img && this.img.rotate())
          .catch(() => { });
      }
    });
  }

  _getAnimateStyle = shouldScale => ({
    width: 70,
    height: shouldScale ? undefined : 70,
    flex: shouldScale ? 1 : undefined
  });

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

    return (
      <Animatable.View style={[styles.container, shouldScale && { flex: 1, alignItems: undefined }]} ref={this._getImgRef}>
        <Text style={styles.text}>{number}</Text>
        <Image
          resizeMode={'contain'}
          source={img}
          style={this._getAnimateStyle(shouldScale)}
        />
      </Animatable.View>
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
