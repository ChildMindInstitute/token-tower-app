import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './TakePhoto.container.style';

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
