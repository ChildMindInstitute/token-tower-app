import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import converter from 'number-to-words';
import _ from 'lodash';

import TextFit from '../../Components/TextFit/TextFit.component';
import Header from '../../Components/TokenTowerHeader/TokenTowerHeader.component';

import {
  tokenStackListenChangeOn,
  tokenStackListenChangeOff,
  tokenStackInit
} from '../../Redux/Reducers/TokenStack/TokenStack.reducer';

import images from '../../Resources/Images';
import styles from './Splash.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Splash.container.config';
import { MSG, USER_ROLE } from '../../Utilities/Constant.utils';

class SplashContainer extends Component {
  componentWillMount() {
    const { subscribeStackChanged, uid } = this.props;
    subscribeStackChanged(uid, this._onStackChangeHandler);
  }

  componentDidUpdate() {
    this._textFit._updateSize();
  }

  componentWillUnmount() {
    const { unsubscribeStackChanged, uid } = this.props;
    unsubscribeStackChanged(uid, this._onStackChangeHandler);
  }

  _onStackChangeHandler = () => {
    const { initStack, uid } = this.props;
    initStack(uid);
  }

  _onTouch = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.TokenTower.Main);
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
    const { childName, prizes, isChild, isHaveChild, tokenStack: { tokens } } = this.props;
    const { childTokensEarned = 0, parentTokensEarned = 0 } = this.props;
    const tokensEarned = (isHaveChild ? childTokensEarned : parentTokensEarned) + tokens.length;

    const subject = `${isHaveChild && !isChild ? `${childName} has` : 'You have'}`;
    let text = tokensEarned > 0 ? `${subject} ${tokensEarned} tokens!! ` : MSG.ZERO_TOKEN;

    this.showFirework = false;

    if (prizes && prizes.length > 0) {
      let currentAchivePrizeIndex;
      const nextPrizeIndex = prizes.findIndex((p, i) => {
        if (p.amount === tokensEarned) currentAchivePrizeIndex = i;
        return p.amount > tokensEarned;
      });
      const nextPrize = prizes[nextPrizeIndex];
      const currentAchivePrize = prizes[currentAchivePrizeIndex];

      if (currentAchivePrize && currentAchivePrizeIndex < prizes.length - 1) {
        const achiveTimes = converter.toWordsOrdinal(currentAchivePrizeIndex + 1);
        text += `Congratulation!!! ${subject} archived the tokens for the ${achiveTimes} prize`;
        this.showFirework = true;
      } else if (nextPrize) {
        const sub = isHaveChild && !isChild ? `${childName}'s` : 'your';
        text += `Only ${nextPrize.amount - tokensEarned} more for ${sub} next PRIZE!!!`;
      } else {
        text += isHaveChild && !isChild ? MSG.UR_KID_ACHIEVE_ALL_GOALS : MSG.ACHIEVE_ALL_GOALS;
        this.showFirework = true;
      }
    } else if (isChild) text += MSG.NOT_SET_GOAL_KID;
    else text += MSG.SET_PRIZE;

    return (
      <TextFit height={150} style={styles._text} ref={this._getTextFitRef}>{text}</TextFit>
    );
  }

  _getTextFitRef = (textFit) => { this._textFit = textFit; }

  _renderFirework = () => (
    this.showFirework && <View style={styles._fireworkContainer}>
      <Image source={images.firework} style={styles._firework} />
    </View>
  );

  render() {
    return (
      <TouchableWithoutFeedback onPress={_.debounce(this._onTouch, 500, { trailing: true, leading: false })}>
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
  uid: user.uid,
  isHaveChild: !!(user.child && user.child.name),
  childName: user.child && user.child.name,
  childTokensEarned: user.child && user.child.tokensEarned,
  parentTokensEarned: user.parent && user.parent.tokensEarned,
  prizes: user.prizes,
  isChild: user.role === USER_ROLE.CHILD,
  tokenStack
});
const mapDispatchToProps = {
  subscribeStackChanged: tokenStackListenChangeOn,
  unsubscribeStackChanged: tokenStackListenChangeOff,
  initStack: tokenStackInit
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
