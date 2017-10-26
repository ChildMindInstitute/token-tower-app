import React from 'react';
import propTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import images from '../../Resources/Images';
import styles from './TokenTowerHeader.component.styles';

import { DIRECTION } from '../../Utilities/Constant.utils';

const isHorizontal = direction => direction === DIRECTION.HORIZONTAL;

const TokenTowerHeader = ({ direction, textStyle }) => {
  const containerStyle = isHorizontal(direction) ?
    styles.containerHorizontal : styles.containerVertical;

  const _renderImage = () => {
    const style = isHorizontal(direction) ? styles.imageHorizontal : styles.image;
    const image = <Image resizeMode={'contain'} source={images.k1} style={style} />;

    return isHorizontal(direction) ? <View style={styles.imgContainer}>{image}</View> : image;
  };

  return (
    <View style={containerStyle}>
      <Text style={[styles.text, textStyle]}>Token</Text>
      {_renderImage()}
      <Text style={[styles.text, textStyle]}>Tower</Text>
    </View>
  );
};

TokenTowerHeader.defaultProps = {
  direction: DIRECTION.VERTICAL
};

TokenTowerHeader.propTypes = {
  direction: propTypes.string,
  textStyle: propTypes.object
};

export default TokenTowerHeader;
