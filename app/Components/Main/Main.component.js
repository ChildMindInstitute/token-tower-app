import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Btn from '../FormButton/FormButton.component';
import Bottom from './MainBottom.component';
import Header from '../../Components/TokenTowerHeader/TokenTowerHeader.component';

import images from '../../Resources/Images';
import styles from './Main.component.styles';

import config from './Main.component.config';
import { DIRECTION } from '../../Utilities/Constant.utils';

class MainComponent extends Component {
  _onMinusPress = () => {
    const { onMinusPress } = this.props;
    if (onMinusPress) onMinusPress();
  }

  _onPlusPress = () => {
    const { onPlusPress } = this.props;
    if (onPlusPress) onPlusPress();
  }

  render() {
    const {
      onCameraPress, onTokenPress,
      onPrizePress, token,
      cameraStyle, minusIconColor,
      tokenStyle, plusIconColor,
      presentStyle
    } = this.props;

    return (
      <Image source={images.firstbackground} style={styles.bgrContainer}>
        <View style={styles.topContainer}>
          {token || <Header direction={DIRECTION.HORIZONTAL} textStyle={styles.textTransparent} />}
        </View>
        <Bottom
          onCameraPress={onCameraPress} onMinusPress={this._onMinusPress}
          onTokenPress={onTokenPress} onPlusPress={this._onPlusPress}
          onPrizePress={onPrizePress}
          cameraStyle={cameraStyle} minusIconColor={minusIconColor}
          tokenStyle={tokenStyle} plusIconColor={plusIconColor}
          presentStyle={presentStyle}
        />
      </Image>
    );
  }
}

MainComponent.propTypes = config.propTypes;

export default MainComponent;
