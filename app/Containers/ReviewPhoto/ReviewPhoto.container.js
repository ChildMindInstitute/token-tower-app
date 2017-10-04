import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';

import images from '../../Resources/Images';
import styles from './ReviewPhoto.container.style';

import { DIRECTION } from '../../Utilities/Constant.utils';

export default class ReviewPhotoContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles._container}>
        <Header direction={DIRECTION.HORIZONTAL} />
        <View style={styles._imgContainer}>
          <Image source={images.k2} resizeMode={'contain'} style={styles._images} />
        </View>
        <View style={styles._btnContainer}>
          <Btn btnStyle={styles._btn} textStyle={styles._text} text={'Keep'} kind={'plain'} />
          <Btn btnStyle={styles._btn} textStyle={styles._text2} text={'Delete'} kind={'plain'} />
        </View>
      </View>
    );
  }
}
