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
    if (this._isUnmounted) return;
    const { imgUri } = this.props;
    getPhotoById(imgUri, (data = []) => {
      if (this._isUnmounted) return;
      this.setState({ base64: data[0] && data[0].base64 });

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
    });
  }

  componentDidUpdate() {
    if (this._isUnmounted) return;
    const { imgUri } = this.props;
    const { base64 } = this.state;
    if (imgUri) {
      if (!base64) {
        this.componentDidMount();
      }
    }
  }

  componentWillUnmount() {
    this._isUnmounted = true;
  }

  _onAnimateFinished = async () => {
    const { isLast, canAnimation } = this.props;
    if (isLast && canAnimation) await soundUtils.play(Sounds.coinDrop);
  };

  _onTextLayout = (event) => {
    const { nativeEvent: { layout: { height } } } = event;
    this.setState({ textHeight: height });
  }

  _onImageLayout = (event) => {
    const { nativeEvent: { layout: { height } } } = event;
    this.setState({ imageHeight: height });
  }

  _getImgRef = (ref) => { this.img = ref; };
  _getTxtRef = (ref) => { this.txt = ref; };

  render() {
    const { base64, imageHeight, textHeight } = this.state;
    const { imgUri, number, shouldScale } = this.props;

    let img;
    if (imgUri) {
      if (base64) img = { uri: base64 };
      else return null;
    } else img = images.coinEmpty;

    const animateStyle = [styles.container, shouldScale && { flex: 1, alignItems: null }];
    const imgStyle = {
      width: 90,
      height: shouldScale ? null : 90,
      flex: shouldScale ? 1 : 0
    };

    return (
      <View style={animateStyle}>
        <Animatable.Text
          onLayout={this._onTextLayout}
          style={[styles.text, { top: (imageHeight / 2) - (textHeight / 2) }]}
          ref={this._getTxtRef}
        >{number}
        </Animatable.Text>
        <Animatable.Image
          onLayout={this._onImageLayout}
          resizeMode={'contain'}
          source={img}
          style={imgStyle}
          ref={this._getImgRef}
        />
      </View>
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
