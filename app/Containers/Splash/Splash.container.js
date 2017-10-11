import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import TextFit from '../../Components/TextFit/TextFit.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import images from '../../Resources/Images';
import styles from './Splash.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Splash.container.config';
import { showTopErrNotification } from '../../Utilities/Form.util';
import { ERR_MSG, MSG, USER_ROLE } from '../../Utilities/Constant.utils';

class SplashContainer extends Component {
  componentWillMount() {
    const { isHaveChild, navigation: { navigate, dispatch } } = this.props;

    if (isHaveChild) return;
    navigate(routeName.Root.Config);
    showTopErrNotification({
      title: ERR_MSG.CAN_NOT_ENTER_TITLE,
      message: ERR_MSG.NEED_CHILD_INFO
    }, dispatch);
  }

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
    const { tokensEarned, prizes, isChild } = this.props;
    let text = `You have ${tokensEarned} tokens!!! `;

    if (prizes && prizes.length > 0) {
      const prize = prizes.find((p => p.amount > tokensEarned));
      if (prize) text += `Only ${prize.amount - tokensEarned} more for your next PRIZE!!!`;
      else text += MSG.ACHIEVE_ALL_GOALS;
    } else if (isChild) text = MSG.NOT_SET_GOAL;
    else text = MSG.SET_PRIZE;

    return (
      <TextFit height={200} style={styles._text}>{text}</TextFit>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onTouch}>
        <View style={styles._container}>
          <Header direction={'horizontal'} />
          <View style={styles._textContainer}>
            <View style={styles._wrap}>
              <View style={styles._textBubble}>
                {this._renderMotivationMsg()}
              </View>
            </View>
            <View style={styles._img}>
              {this._renderTreasure()}
              {this._renderPresent()}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

SplashContainer.propTypes = config.propTypes;


const mapStateToProps = state => ({
  isHaveChild: !!(state.user.child && state.user.child.name),
  tokensEarned: state.user.child && state.user.child.tokensEarned,
  prizes: state.user.prizes,
  isChild: state.user.role === USER_ROLE.CHILD
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
