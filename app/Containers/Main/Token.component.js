import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import images from '../../Resources/Images';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import formPropTypes from '../../PropTypes/Form.propTypes';
import { getPhotoById } from '../../Utilities/Photos.utils';

class Token extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const { imgUri } = this.props;
    getPhotoById(imgUri, (data = []) => {
      this.setState({ base64: data[0] && data[0].base64 });
    });
  }

  componentDidMount() {
    if (this.img) {
      this.img.bounceInDown()
        .then(() => this.img.rubberBand())
        .then(() => this.img.rotate());
    }
  }

  _getAnimateStyle = () => ({
    width: 80,
    height: this.props.shouldScale ? undefined : 80,
    flex: this.props.shouldScale ? 1 : undefined
  });

  _onAnimateFinished = async () => {
    const { isLast, canAnimation } = this.props;
    if (isLast && canAnimation) await soundUtils.play(Sounds.coinDrop);
  };

  _getImgRef = (ref) => { this.img = ref; };

  render() {
    const { base64 } = this.state;
    const { imgUri } = this.props;
    let img;
    if (imgUri) {
      if (base64) img = { uri: base64 };
      else return null;
    } else img = images.coinEmpty;

    return (
      <Animatable.Image
        resizeMode={'contain'}
        source={img}
        style={this._getAnimateStyle()}
        ref={this._getImgRef}
      />
    );
  }
}

Token.propTypes = {
  ...formPropTypes
};

export default Token;
