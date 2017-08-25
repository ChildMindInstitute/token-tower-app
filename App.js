import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

import images from './app/Resources/Images'

export default class App extends React.Component {
  render() {
    return (
      <Image source={images.firstbackground} style={styles.bgrContainer}>
        <Image source={images.token} />
        {this.state.putCoint && <Image source={images.k1} />}
        <TouchableOpacity onPress={this._onPigPress}>
          <Image source={images.pig} />
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  bgrContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    width: null,
    height: null    
  }
});
