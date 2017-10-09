import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import images from '../../Resources/Images';
import styles from './Splash.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Splash.container.config';
import { showTopErrNotification } from '../../Utilities/Form.util';
import { ERR_MSG, MSG } from '../../Utilities/Constant.utils';

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
    const { tokensEarned, prizes } = this.props;
    let text = MSG.SET_PRIZE;

    if (prizes && prizes.length > 0) {
      const { amount } = prizes.find((p => p.amount > tokensEarned));
      text = `You have ${tokensEarned} tokens!!! Only ${amount - tokensEarned} more for your next PRIZE!!!`;
    }
    return (
      <Text style={styles._text}>{text}</Text>
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
  prizes: state.user.prizes
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
