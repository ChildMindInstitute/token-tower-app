import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import images from '../../Resources/Images';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import styles from './Token.component.styles';

import formPropTypes from '../../PropTypes/Form.propTypes';
import { getPhotoById } from '../../Utilities/Photos.utils';

const bouncingEntrances = ['bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight'];

class Token extends Component {
  constructor() {
    super();
    this.state = {};
    this.randomAnimated = bouncingEntrances[Math.floor(Math.random() * 4)];
  }

  componentDidMount() {
    const { imgUri } = this.props;
    getPhotoById(imgUri, (data = []) => {
      this.setState({ base64: data[0] && data[0].base64 });
    });
  }

  componentDidUpdate() {
    if (this.txt) {
      this.txt[this.randomAnimated]()
        .then(() => this.txt && this.txt.flash());
    }
    if (this.img) {
      this.img.bounceInDown()
        .then(() => this._onAnimateFinished())
        .then(() => this.img && this.img.rubberBand())
        .then(() => this.img && this.img.rotate());
    }
  }

  _onAnimateFinished = async () => {
    const { isLast, canAnimation } = this.props;
    if (isLast && canAnimation) await soundUtils.play(Sounds.coinDrop);
  };

  _getImgRef = (ref) => { this.img = ref; };
  _getTxtRef = (ref) => { this.txt = ref; };

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
      <View style={animateStyle}>
        <Animatable.Text style={styles.text} ref={this._getTxtRef}>{number}</Animatable.Text>
        <Animatable.Image resizeMode={'contain'} source={img} style={imgStyle} ref={this._getImgRef} />
      </View>
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
