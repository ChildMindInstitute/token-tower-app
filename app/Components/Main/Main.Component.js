import React, { Component } from 'react';
import { View, Image, Animated, Dimensions } from 'react-native';
import propTypes from 'prop-types';

import Btn from '../FormButton/FormButton.component';
import Bottom from './MainBottom.component';

import images from '../../Resources/Images';
import styles from './Main.component.styles';

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
    };
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

  render() {
    const animateStyle = {
      width: 150,
      height: 150,
      opacity: this.state.putCoint ? 1 : 0,
      transform: [{
        translateY: this.state.fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, Dimensions.get('window').height / 3]
        })
      }]
    };
    const { onCameraPress, onTokenPress, onPrizePress, containerStyle } = this.props;
    return (
      <Image source={images.firstbackground} style={[styles.bgrContainer, containerStyle]}>
        <View style={styles.topContainer}>
          <Image source={images.token} />
          <Animated.Image source={images.k1} style={animateStyle} />
          <Btn onPress={this._onPigPress}>
            <Image source={images.pig} />
          </Btn>
        </View>
        <Bottom
          onCameraPress={onCameraPress}
          onTokenPress={onTokenPress}
          onPrizePress={onPrizePress}
        />
      </Image>
    );
  }
}

MainComponent.propTypes = {
  onCameraPress: propTypes.func,
  onTokenPress: propTypes.func,
  onPrizePress: propTypes.func
};

export default MainComponent;
