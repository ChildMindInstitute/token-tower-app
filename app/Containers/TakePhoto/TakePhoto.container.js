import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './TakePhoto.container.style';
import images from '../../Resources/Images';

export default class TakePhotoContainer extends Component {
  componentDidMount() {

  }
  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate('ReviewPhoto');
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.bottomImageContainer} onPress={this._onClick}>
          <Text> Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}