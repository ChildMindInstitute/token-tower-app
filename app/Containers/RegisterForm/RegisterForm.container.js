import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Expo from 'expo';

import Btn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTowerHeader/TokenTowerHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import {
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationFb,
  authenticationGg
} from '../../Redux/Reducers/Authentication/Authentication.reducer';
import {
  userUpdateBasicProfile,
  userAuthenticated,
  userUpdateProfile,
  userInitProfile
} from '../../Redux/Reducers/User/User.reducer';

import images from '../../Resources/Images';
import styles from './RegisterForm.container.styles';

import config from './RegisterForm.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { FacebookAuthenticate, GoogleAuthenticate } from '../../Provider/Provider.config';
import { required, minLength, maxLength, emailValidation } from '../../Utilities/Validation.utils';
import { DIRECTION, ERR_MSG, COMMON } from '../../Utilities/Constant.utils';
import { showTopErrNotification } from '../../Utilities/Form.util';

class RegisterFormContainer extends Component {
  constructor() {
    super();
    this.usernameValidation = [minLength(2), maxLength(30)];
    this.passwordValidation = [minLength(6)];
    this.emailValidation = [required, emailValidation];
  }

  _renderUserInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>User</Text>
      <Field
        name={'username'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'username'}
        validate={this.usernameValidation}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'password'} secureTextEntry
        validate={this.passwordValidation}
      />
    </View>
  )

  _renderEmailInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Email</Text>
      <Field
        keyboardType={'email-address'} name={'email'}
        component={Input} inputStyle={styles._input}
        containerStyle={styles._inputContainer}
        placeholder={'contact@example.com'}
        validate={this.emailValidation}
      />
    </View>
  )

  _onFail = ({ message }) => showTopErrNotification({
    title: ERR_MSG.REGISTER_ERROR_TITLE, message
  }, this.props.dispatch);

  _handleSubmit = ({ username, password, email }) => {
    const { register, sendEmailVerification, updateBasicProfile, navigation: { navigate } } = this.props;
    register({ email, password })
      .then(() => updateBasicProfile({ username }))
      .then(this._updateProfile)
      .then(sendEmailVerification)
      .then(() => navigate(routeName.Registration.RegisterWelcome))
      .catch(({ code, message }) => {
        let msg;
        if (code === 'auth/email-already-in-use') msg = ERR_MSG.EMAIL_ALREADY_IN_USE;
        this._onFail({ message: msg || message });
      });
  }

  _updateProfile = ({ value: { displayName, email, uid } }) => {
    const { canContact, updateProfile } = this.props;
    return updateProfile({ uid, displayName, email, canContact });
  };

  _signInWithProviderWrap = (promise) => {
    const { initProfile, authenticated, navigation: { navigate } } = this.props;
    const _providerAuthenticated = () => {
      authenticated();
      navigate(routeName.Root.UpdateInfo);
    };
    promise
      .then(this._updateProfile)
      .then(({ value }) => initProfile(value))
      .then(_providerAuthenticated)
      .catch(this._onFail);
  }

  _onGgPressed = async () => {
    try {
      const { signInWithGg } = this.props;
      const { type, accessToken, idToken } = await Expo.Google.logInAsync(GoogleAuthenticate);

      if (type !== COMMON.SUCCESS) return;
      this._signInWithProviderWrap(signInWithGg(idToken, accessToken));
    } catch (e) {
      this._onFail({ message: ERR_MSG.GOOGLE_SIGN_IN });
    }
  }

  _onFbPressed = async () => {
    const { signInWithFb } = this.props;
    const { appId, scopes } = FacebookAuthenticate;
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, scopes);

    if (type !== COMMON.SUCCESS) return;
    this._signInWithProviderWrap(signInWithFb(token));
  }

  render() {
    return (
      <View style={styles._container}>
        <ScrollView style={styles._contentBlock}>
          <Header direction={DIRECTION.HORIZONTAL} />
          <View style={styles._inputBlock}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
            {this._renderEmailInput()}
          </View>
          <View style={styles._socialLogos}>
            <Text style={styles._logoText}>Or login with: </Text>
            <View style={styles._logosBlock}>
              <Btn btnStyle={styles._logos} onPress={this._onGgPressed}>
                <Image resizeMode={'contain'} source={images.google} style={styles._image} />
              </Btn>
              <Btn btnStyle={styles._logos} onPress={this._onFbPressed}>
                <Image resizeMode={'contain'} source={images.facebook} style={styles._image} />
              </Btn>
            </View>
          </View>
        </ScrollView>
        <Btn onPress={this.props.handleSubmit(this._handleSubmit)} text={'NEXT'} />
      </View>
    );
  }
}

RegisterFormContainer.propTypes = config.propTypes;

const mapStateToProps = state => ({
  canContact: state.form.registerPermissionForm.values.canContact
});
const mapDispatchToProps = {
  register: authenticationCreateNewAccount,
  sendEmailVerification: authenticationSendEmailVerification,
  updateProfile: userUpdateProfile,
  updateBasicProfile: userUpdateBasicProfile,
  initProfile: userInitProfile,
  signInWithFb: authenticationFb,
  signInWithGg: authenticationGg,
  authenticated: userAuthenticated
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(RegisterFormContainer));
