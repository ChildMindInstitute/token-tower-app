import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './ReviewPhoto.container.style';
import images from '../../Resources/Images';
import Constant from '../../Utilities/Constant.utils';

export default class ReviewPhotoContainer extends Component {
  componentDidMount() {

  }


  render() {
    return (
      <View>
        <Header direction={Constant.DIRECTION.HORIZONTAL} />
        <View style={styles.imgContainer}>
          <Image source={images.k2} resizeMode={'contain'} style={styles.images} />
        </View>
        <View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.ImageContainer} >
              <Text style={styles.text}>Keep</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ImageContainer2} >
              <Text style={styles.text2}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
