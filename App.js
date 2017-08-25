import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Animated } from 'react-native';

import images from './app/Resources/Images'

export default class App extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidUpdate() {
    if (this.state.putCoint)
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 1000,              // Make it take a while
        }
      ).start(() => { this.setState({ putCoint: false, fadeAnim: new Animated.Value(0) }) });
  }

  _onPigPress = () => {
    if (!this.state.putCoint) this.setState({ putCoint: true });
  }

  render() {
    return (
      <Image source={images.firstbackground} style={styles.bgrContainer}>
        <Image source={images.token} />
        {this.state.putCoint &&
          <Animated.Image source={images.k1} style={{
            opacity: this.state.fadeAnim,
            transform: [{
              translateY: this.state.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 350]
              }),
            }],
          }} />}
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
