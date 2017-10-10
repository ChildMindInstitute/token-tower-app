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

import { tokenHistoryAdd } from '../../Redux/Reducers/TokenHistory/TokenHistory.reducer';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Main.container.config';
import { USER_ROLE, TOKEN_ACTION_TYPE, MSG, ERR_MSG, COMMON } from '../../Utilities/Constant.utils';
import { showTopInfoNotification, showTopErrNotification } from '../../Utilities/Form.util';

class MainContainer extends Component {
  componentWillMount() {
    const { subscribeStackChanged, user: { uid } } = this.props;
    subscribeStackChanged(uid, this._onStackChangeHandler);

    const { initStack } = this.props;
    initStack(uid);
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
    navigate(routeName.TokenTotem.TakePhoto);
  }

  _onMinus = () => {
    const { updateStack, addHistory, user: { uid }, tokenStack, dispatch } = this.props;
    if (tokenStack.tokens.length < 1) {
      Alert.alert(
        MSG.REMOVE_TOKEN_TITLE,
        MSG.REMOVE_TOKEN_ASK,
        [
          { text: COMMON.CANCEL, onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: COMMON.OK, onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
      return;
    }

    tokenStack.tokens.pop();
    updateStack(uid, tokenStack);
    addHistory(uid, { type: TOKEN_ACTION_TYPE.REMOVE, tokenImgUrl: '' });
    showTopInfoNotification({
      title: MSG.REMOVE_TOKEN_TITLE,
      message: MSG.REMOVE_TOKEN
    }, dispatch);
  }

  _onToken = () => {
    const { isChild, navigation } = this.props;
    const { navigate } = navigation;

    if (isChild) navigation.goBack();
    else navigate(routeName.Root.Config);
  }

  _onPlus = () => {
    const { updateStack, addHistory, user: { uid, initialToken }, tokenStack, dispatch } = this.props;
    if (tokenStack.tokens.length >= initialToken) {
      showTopErrNotification({
        title: ERR_MSG.ADD_TOKEN_TITLE,
        message: ERR_MSG.ADD_TOKEN
      }, dispatch);
      return;
    }
    tokenStack.tokens.push('');
    updateStack(uid, tokenStack);
    addHistory(uid, { type: TOKEN_ACTION_TYPE.ADD, tokenImgUrl: '' });
    showTopInfoNotification({
      title: MSG.ADD_TOKEN_TITLE,
      message: MSG.ADD_TOKEN
    }, dispatch);
  }

  _onPrize = () => {
    const { navigation: { navigate } } = this.props;
    navigate(routeName.TokenTotem.Prize);
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
    <FieldArray component={TokenStack} name="tokenStack" />
  );

  _onPig = () => { }

  render() {
    return (
      <Main
        onCameraPress={this._onCamera}
        onPigPress={this._onPig} onTokenPress={this._onToken}
        onPlusPress={this._initFuncWithRole(this._onPlus)}
        onMinusPress={this._initFuncWithRole(this._onMinus)}
        minusIconColor={this._getColor()} plusIconColor={this._getColor()}
        onPrizePress={this._onPrize} token={this._renderTokenStack()}
      />
    );
  }
}

MainContainer.propTypes = config.propTypes;

const mapStateToProps = state => ({
  user: state.user,
  isChild: state.user.role === USER_ROLE.CHILD,
  tokenStack: state.tokenStack,
  initialValues: {
    tokenStack: state.tokenStack.tokens
  }
});

const mapDispatchToProps = {
  subscribeStackChanged: tokenStackListenChangeOn,
  unsubscribeStackChanged: tokenStackListenChangeOff,
  updateStack: tokenStackUpdate,
  initStack: tokenStackInit,
  addHistory: tokenHistoryAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(MainContainer));
