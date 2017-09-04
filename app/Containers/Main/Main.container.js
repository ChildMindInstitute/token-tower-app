import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Animated } from 'react-native';

import images from '../../Resources/Images';

import styles from './Main.container.style';

export default class MainContainer extends Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  }

  componentDidUpdate() {
    if (this.state.putCoint) {
      const onAnimateFinished = () => {
        this.setState({ putCoint: false, fadeAnim: new Animated.Value(0) });
      };

      Animated.timing( // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          duration: 1000 // Make it take a while
        },
      ).start(onAnimateFinished);
    }
  }

  _onPigPress = () => {
    if (!this.state.putCoint) this.setState({ putCoint: true });
  }
  _onPrize = () => {
    const {navigate} = this.props.navigation;
    navigate('Prize');
  }
  render() {
    const animateStyle = {
      width: 150,
      height: 150,
      opacity: this.state.fadeAnim,
      transform: [{
        translateY: this.state.fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 250]
        })
      }]
    };

    return (
      <Image source={images.firstbackground} style={styles.bgrContainer}>
        <View style={styles.topContainer}>
          <Image source={images.token} />
          {this.state.putCoint && <Animated.Image source={images.k1} style={animateStyle} />}
          <TouchableOpacity onPress={this._onPigPress}>
            <Image source={images.pig} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottomImageContainer} >
            <Image source={images.camera} resizeMode={'contain'} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomImageContainer} >
            <Image source={images.k3} resizeMode={'contain'} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomImageContainer} onPress={this._onPrize} >
            <Image source={images.present} resizeMode={'contain'} style={styles.images} />
          </TouchableOpacity>
        </View>
      </Image>
    );
  }
}
