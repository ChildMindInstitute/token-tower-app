import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, FieldArray } from 'redux-form';

import Main from '../../Components/Main/Main.component';
import TokenStack from './TokenStack.component';

import {
  tokenStackListenChangeOn,
  tokenStackListenChangeOff,
  tokenStackUpdate,
  tokenStackInit
} from '../../Redux/Reducers/TokenStack/TokenStack.reducer';
import { userUpdateProfile, userInitProfile } from '../../Redux/Reducers/User/User.reducer';
import { tokenHistoryAdd } from '../../Redux/Reducers/TokenHistory/TokenHistory.reducer';
import Sounds from '../../Resources/Sounds';

import soundUtils from '../../Utilities/Sound.utils';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Main.container.config';
import { USER_ROLE, TOKEN_ACTION_TYPE, MSG, ERR_MSG, COMMON } from '../../Utilities/Constant.utils';
import { showTopErrNotification } from '../../Utilities/Form.util';

class MainContainer extends Component {
  componentWillMount() {
    const { subscribeStackChanged, user: { uid } } = this.props;
    subscribeStackChanged(uid, this._onStackChangeHandler);
  }

  async componentDidUpdate({ tokenStack: { tokens: prevTokens } }) {
    const { user: { canAnimation }, tokenStack: { tokens } } = this.props;
    if (canAnimation && prevTokens.length > tokens.length) {
      await soundUtils.play(Sounds.poof);
    }
  }

  componentWillUnmount() {
    const { unsubscribeStackChanged, user: { uid } } = this.props;
    unsubscribeStackChanged(uid, this._onStackChangeHandler);
  }

  _onStackChangeHandler = () => {
    const { initStack, user: { uid } } = this.props;
    initStack(uid);
  }

  _onCamera = () => {
    const { navigation: { navigate } } = this.props;
    navigate(routeName.TokenTower.TakePhoto);
  }

  _updateUserProfile = (user) => {
    const { initProfile, updateProfile } = this.props;
    return updateProfile(user).then(({ value }) => initProfile(value));
  }

  _removeTokenFromPiggyBank = () => {
    const { user, dispatch, addHistory } = this.props;
    const { uid, child = {}, parent = {} } = user;

    const { tokensEarned: childTokensEarned = 0 } = child;
    const { tokensEarned: parentTokensEarned = 0 } = parent;
    const isHaveChild = !!(user.child && user.child.name);

    let tokensEarned = isHaveChild ? childTokensEarned : parentTokensEarned;
    if (tokensEarned < 1) {
      showTopErrNotification({ title: ERR_MSG.REMOVE_TOKEN_TITLE, message: ERR_MSG.REMOVE_TOKEN }, dispatch);
    } else {
      tokensEarned -= 1;
      tokensEarned = isHaveChild ? { child: { ...child, tokensEarned } } : { parent: { tokensEarned } };
      const userProfile = { ...user, ...tokensEarned };

      Alert.alert(
        MSG.REMOVE_TOKEN_TITLE,
        MSG.REMOVE_TOKEN_ASK,
        [
          { text: COMMON.CANCEL, style: 'cancel' },
          {
            text: COMMON.OK,
            onPress: () => {
              this._updateUserProfile(userProfile)
                .then(() => addHistory(uid, { type: TOKEN_ACTION_TYPE.REMOVE, tokenImgUrl: '' }));
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  _onMinus = () => {
    const { updateStack, addHistory, user: { uid }, tokenStack } = this.props;

    if (tokenStack.tokens.length < 1) {
      this._removeTokenFromPiggyBank();
      return;
    }
    const newStacks = [...tokenStack.tokens];
    const imgKey = newStacks.pop();
    updateStack(uid, { ...tokenStack, tokens: newStacks });
    addHistory(uid, { type: TOKEN_ACTION_TYPE.REMOVE, tokenImgUrl: imgKey });
  }

  _onToken = () => {
    const { isChild, navigation } = this.props;
    const { navigate } = navigation;

    if (isChild) navigation.goBack();
    else navigate(routeName.Root.Config);
  }

  _onPlus = () => {
    const { updateStack, addHistory,
      user: { uid }, tokenStack, photoList } = this.props;

    const imgRandomKey = photoList[Math.floor(Math.random() * photoList.length)] || '';

    const newStacks = [...tokenStack.tokens];
    newStacks.push(imgRandomKey);
    updateStack(uid, { ...tokenStack, tokens: newStacks });
    addHistory(uid, { type: TOKEN_ACTION_TYPE.ADD, tokenImgUrl: imgRandomKey });
  }

  _onPrize = () => {
    const { navigation: { navigate } } = this.props;
    navigate(routeName.TokenTower.Prize);
  }

  _getColor = () => {
    const { isChild } = this.props;
    return isChild ? 'transparent' : '';
  };

  _initFuncWithRole = (callback) => {
    const { isChild } = this.props;
    return isChild ? undefined : callback;
  }

  _renderTokenStack = () => (
    <FieldArray
      component={TokenStack}
      name="tokenStack"
      canAnimation={this.props.user.canAnimation}
    />
  );

  render() {
    return (
      <Main
        onCameraPress={this._onCamera}
        onTokenPress={this._onToken}
        onPlusPress={this._onPlus}
        onMinusPress={this._onMinus}
        minusIconColor={this._getColor()} plusIconColor={this._getColor()}
        onPrizePress={this._onPrize} token={this._renderTokenStack()}
      />
    );
  }
}

MainContainer.propTypes = config.propTypes;

const constructTokenStack = (stack, photoList) => {
  const currencyList = [100, 50, 25, 10, 5, 1];
  const totalTokens = stack.length;
  const tokenStack = [];

  const getTokenStack = (tokens) => {
    for (let i = 0; i < currencyList.length; i += 1) {
      const offset = Math.floor(tokens / currencyList[i]);
      if (offset > 0) {
        let remain = tokens;
        for (let j = 0; j < offset; j += 1) {
          remain -= currencyList[i];
          tokenStack.push({ number: currencyList[i] });
        }
        if (remain > 0) getTokenStack(remain);
        break;
      }
    }
  };

  getTokenStack(totalTokens);

  return tokenStack.map(({ number }, i) => ({
    number, uri: photoList && photoList.length > 0 && stack[(stack.length - tokenStack.length) + i]
  }));
};

const mapStateToProps = state => ({
  user: state.user,
  isChild: state.user.role === USER_ROLE.CHILD,
  tokenStack: state.tokenStack,
  initialValues: {
    tokenStack: constructTokenStack(state.tokenStack.tokens, state.photo)
  },
  photoList: state.photo
});

const mapDispatchToProps = {
  subscribeStackChanged: tokenStackListenChangeOn,
  unsubscribeStackChanged: tokenStackListenChangeOff,
  updateStack: tokenStackUpdate,
  initStack: tokenStackInit,
  addHistory: tokenHistoryAdd,
  initProfile: userInitProfile,
  updateProfile: userUpdateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(MainContainer));
