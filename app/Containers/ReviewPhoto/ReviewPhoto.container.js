import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './ReviewPhoto.container.style';
import images from '../../Resources/Images';
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
          <TouchableOpacity style={styles._btn} >
            <Text style={styles._text}>Keep</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles._btn2} >
            <Text style={styles._text2}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
