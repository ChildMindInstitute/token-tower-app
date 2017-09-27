import React from 'react';
import { View, Image } from 'react-native';
import propTypes from 'prop-types';

import Btn from '../FormButton/FormButton.component';
import FontIcon from '../FontIcon/FontIcon.component';

import images from '../../Resources/Images';
import styles from './MainBottom.component.styles';

const MainBottom = ({ onCameraPress, onTokenPress, onPrizePress }) => (
  <View style={styles.bottomContainer}>
    <Btn btnStyle={styles.bottomImageContainer} onPress={onCameraPress}>
      <Image source={images.camera} resizeMode={'contain'} style={styles.images} />
    </Btn>
    <Btn btnStyle={styles.iconContainer}>
      <FontIcon name={'minus'} color={styles.fontColor} size={40} />
    </Btn>
    <Btn btnStyle={styles.bottomImageContainer} onPress={onTokenPress}>
      <Image source={images.k3} resizeMode={'contain'} style={styles.images} />
    </Btn>
    <Btn btnStyle={styles.iconContainer}>
      <FontIcon name={'plus'} color={styles.fontColor} size={40} />
    </Btn>
    <Btn btnStyle={styles.bottomImageContainer} onPress={onPrizePress}>
      <Image source={images.present} resizeMode={'contain'} style={styles.images} />
    </Btn>
  </View>
);

MainBottom.propTypes = {
  onCameraPress: propTypes.func,
  onTokenPress: propTypes.func,
  onPrizePress: propTypes.func
};

export default MainBottom;
