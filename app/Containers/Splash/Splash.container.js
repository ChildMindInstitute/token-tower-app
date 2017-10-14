import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import TextFit from '../../Components/TextFit/TextFit.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import images from '../../Resources/Images';
import styles from './Splash.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Splash.container.config';
import { MSG, USER_ROLE } from '../../Utilities/Constant.utils';

class SplashContainer extends Component {
  _onTouch = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.TokenTotem.Main);
  };

  _renderTreasure = () => (
    <Image
      resizeMode={'contain'}
      source={images.treasure}
      style={styles._treasure}
    />
  );

  _renderPresent = () => (
    <Image
      resizeMode={'contain'}
      source={images.present}
      style={styles._present}
    />
  );

  _renderMotivationMsg = () => {
    const { prizes, isChild, isHaveChild, tokenStack: { tokens } } = this.props;
    const { childTokensEarned = 0, parentTokensEarned = 0 } = this.props;
    const tokensEarned = (isHaveChild ? childTokensEarned : parentTokensEarned) + tokens.length;
    let text = tokensEarned > 0 ? `You have ${tokensEarned} tokens!! ` : MSG.ZERO_TOKEN;
    this.showFirework = false;

    if (prizes && prizes.length > 0) {
      const prize = prizes.find((p => p.amount > tokensEarned));
      if (prize) text += `Only ${prize.amount - tokensEarned} more for your next PRIZE!!!`;
      else {
        text += MSG.ACHIEVE_ALL_GOALS;
        this.showFirework = true;
      }
    } else if (isChild) text += MSG.NOT_SET_GOAL_KID;
    else text += MSG.SET_PRIZE;

    return (
      <TextFit height={150} style={styles._text}>{text}</TextFit>
    );
  }

  _renderFirework = () => (
    this.showFirework && <View style={styles._fireworkContainer}>
      <Image source={images.firework} style={styles._firework} />
    </View>
  );

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onTouch}>
        <View style={styles._outerContainer}>
          <View style={styles._container}>
            <Header direction={'horizontal'} />
            <View style={styles._textContainer}>
              <Animatable.View
                style={styles._wrap}
                animation="pulse"
                iterationCount={'infinite'}
                duration={2000}
              >
                <View style={styles._textBubble}>
                  {this._renderMotivationMsg()}
                </View>
              </Animatable.View>
              <Animatable.View
                style={styles._img}
                animation="bounce"
                iterationCount={'infinite'}
                duration={2500}
              >
                {this._renderTreasure()}
                {this._renderPresent()}
              </Animatable.View>
            </View>
          </View>
          {this._renderFirework()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

SplashContainer.propTypes = config.propTypes;


const mapStateToProps = ({ user, tokenStack }) => ({
  isHaveChild: !!(user.child && user.child.name),
  childTokensEarned: user.child && user.child.tokensEarned,
  parentTokensEarned: user.parent && user.parent.tokensEarned,
  prizes: user.prizes,
  isChild: user.role === USER_ROLE.CHILD,
  tokenStack
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
