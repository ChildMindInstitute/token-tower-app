import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import Btn from '../../Components/FormButton/FormButton.component';

import { authenticationEmailPassword } from '../../Redux/Reducers/Authentication/Authentication.reducer';
import {
  userAuthenticated, userInitProfile, userUpdateProfile
} from '../../Redux/Reducers/User/User.reducer';
import { tokenStackInit, tokenStackUpdate } from '../../Redux/Reducers/TokenStack/TokenStack.reducer';
import { photoInit } from '../../Redux/Reducers/Photo/Photo.reducer';

import styles from './Login.container.styles';

import config from './Login.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { required, emailValidation } from '../../Utilities/Validation.utils';
import { showTopErrNotification } from '../../Utilities/Form.util';
import { ERR_MSG } from '../../Utilities/Constant.utils';
import { isRefreshTime, getNextRefreshTime } from '../../Utilities/Time.utils';

class LoginContainer extends Component {
  _renderUserInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Email</Text>
      <Field
        name={'email'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        validate={[required, emailValidation]}
        keyboardType={'email-address'}
      />
    </View>
  );

  _renderPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        secureTextEntry validate={required}
      />
    </View>
  );

  _onForgot = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Authentication.ForgotPassword);
  }

  _onAuthenticated = ({ value: user }) => {
    const { navigation: { navigate }, authenticated, initStack, initProfile,
      tokenStack: { nextRefreshTime, tokens }, updateStack, updateProfile } = this.props;

    const { uid, child, parent, replenishTokenType } = user;

    authenticated();

    if (nextRefreshTime && isRefreshTime(nextRefreshTime)) {
      updateStack(uid, { nextRefreshTime: getNextRefreshTime(replenishTokenType) })
        .then(() => initStack(uid));

      if (child) {
        updateProfile({ ...user, child: { ...child, tokensEarned: child.tokensEarned + tokens.length } })
          .then(() => initProfile(uid));
      } else {
        const tokensEarned = (parent ? parent.tokensEarned : 0) + tokens.length;
        updateProfile({ ...user, parent: { tokensEarned } })
          .then(() => initProfile(uid));
      }
    }

    if (child) navigate(routeName.Root.MainUser);
    else navigate(routeName.Root.Config);
  }

  _onSubmitSuccess = ({ value: { emailVerified, providerData, uid } }) => {
    const { dispatch, initProfile, initStack, initPhoto } = this.props;
    const isFbOrGgProvider = providerData.find(p => p.providerId === 'facebook.com');

    if (emailVerified || isFbOrGgProvider) {
      initStack(uid)
        .then(() => initPhoto(uid))
        .then(() => initProfile(uid))
        .then(this._onAuthenticated)
        .catch(this._onSubmitFail);
    } else {
      showTopErrNotification({
        title: ERR_MSG.LOGIN_ERROR_TITLE,
        message: ERR_MSG.LOGIN_VERIFY_EMAIL
      }, dispatch);
    }
  }

  _onSubmitFail = ({ message }) => {
    showTopErrNotification({
      title: ERR_MSG.LOGIN_ERROR_TITLE, message
    }, this.props.dispatch);
  }

  _handleSubmit = (values) => {
    const { authentication } = this.props;
    authentication(values)
      .then(this._onSubmitSuccess)
      .catch(({ code, message }) => {
        let msg;
        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          msg = ERR_MSG.LOGIN_USER_NOT_FOUND;
        }
        this._onSubmitFail({ message: msg || message });
      });
  };

  render() {
    return (
      <View style={styles._container}>
        <KeyboardAwareScrollView style={styles._contentBlock}>
          <Header />
          <View style={styles._viewInput}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
          </View>
          <Btn
            onPress={this._onForgot}
            text={'Forgot?'} kind={'plain'}
            textStyle={styles._forgot}
          />
        </KeyboardAwareScrollView>
        <Btn onPress={this.props.handleSubmit(this._handleSubmit)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tokenStack: state.tokenStack
});
const mapDispatchToProps = {
  authentication: authenticationEmailPassword,
  authenticated: userAuthenticated,
  initProfile: userInitProfile,
  initStack: tokenStackInit,
  updateStack: tokenStackUpdate,
  updateProfile: userUpdateProfile,
  initPhoto: photoInit
};

LoginContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(LoginContainer));
