import React from 'react';
import { View, Image } from 'react-native';

import Btn from '../FormButton/FormButton.component';
import FontIcon from '../FontIcon/FontIcon.component';

import images from '../../Resources/Images';
import styles from './MainBottom.component.styles';

import config from './Main.component.config';

const MainBottom = ({ onCameraPress, onTokenPress, onPrizePress,
  cameraStyle, minusIconColor, tokenStyle, plusIconColor, presentStyle,
  onMinusPress, onPlusPress
}) =>
  (
    <View style={styles.bottomContainer}>
      <Btn btnStyle={styles.bottomImageContainer} onPress={onCameraPress}>
        <Image source={images.camera} resizeMode={'contain'} style={[styles.images, cameraStyle]} />
      </Btn>
      <Btn btnStyle={styles.iconContainer} onPress={onMinusPress}>
        <FontIcon name={'minus'} color={minusIconColor || styles.fontColor} size={40} />
      </Btn>
      <Btn btnStyle={styles.bottomImageContainer} onPress={onTokenPress}>
        <Image source={images.k1} resizeMode={'contain'} style={[styles.images, tokenStyle]} />
      </Btn>
      <Btn btnStyle={styles.iconContainer} onPress={onPlusPress}>
        <FontIcon name={'plus'} color={plusIconColor || styles.fontColor} size={40} />
      </Btn>
      <Btn btnStyle={styles.bottomImageContainer} onPress={onPrizePress}>
        <Image source={images.present} resizeMode={'contain'} style={[styles.images, presentStyle]} />
      </Btn>
    </View>
  );

MainBottom.propTypes = config.propTypes;

export default MainBottom;
