import React from 'react';
import propTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import images from '../../Resources/Images';
import { DIRECTION } from '../../Utilities/Constant.utils';

import styles from './TokenTotemHeader.component.styles';

const isHorizontal = direction => direction === DIRECTION.HORIZONTAL;

const TokenTotemHeader = (props) => {
  const { direction } = props;

  const containerStyle = isHorizontal(direction) ?
    styles.containerHorizontal : styles.containerVertical;

  const _renderImage = () => {
    const style = isHorizontal(direction) ? styles.imageHorizontal : styles.image;
    const image = <Image resizeMode={'contain'} source={images.k1} style={style} />;

    return isHorizontal(direction) ? <View style={styles.imgContainer}>{image}</View> : image;
  };

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>Token</Text>
      {_renderImage()}
      <Text style={styles.text}>Totem</Text>
    </View>
  );
};

TokenTotemHeader.defaultProps = {
  direction: DIRECTION.VERTICAL
};

TokenTotemHeader.propTypes = {
  direction: propTypes.string
};

export default TokenTotemHeader;
