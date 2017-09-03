import React from 'react';
import { View, Text, Image } from 'react-native';

import images from '../../Resources/Images';

import styles from './TokenTotemHeader.component.styles';

const isHorizontal = direction => direction === 'horizontal';

const TokenTotemHeader = (props) => {
  const { direction } = props;

  const containerStyle = isHorizontal(direction) ?
    styles.containerHorizontal : styles.containerVertical;

  const _renderImage = () => {
    const style = isHorizontal(direction) ?
      { flex: 1, width: null, height: null } : styles.image;

    const image = (
      <Image
        resizeMode={'contain'}
        source={images.k1}
        style={style}
      />
    );

    return (
      isHorizontal(direction) ?
        (<View style={{ flex: 1 }}>
          {image}
        </View>) : image
    );
  };

  return (
    <View style={[containerStyle]}>
      <Text style={styles.text}>Token</Text>
      {_renderImage()}
      <Text style={styles.text}>Totem</Text>
    </View>
  );
};

export default TokenTotemHeader;
