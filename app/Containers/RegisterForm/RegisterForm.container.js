import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Expo from 'expo';

import Btn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import {
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationFb
} from '../../Redux/Reducers/Authentication/Authentication.reducer';
import { userUpdateProfile, userAuthenticated } from '../../Redux/Reducers/User/User.reducer';

import images from '../../Resources/Images';
import styles from './RegisterForm.container.styles';

import config from './RegisterForm.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
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

  _upadteUserProfile = (values, onSuccess, onFail) => {
    const { updateProfile } = this.props;
    updateProfile(values).then(onSuccess).catch(onFail);
  }

  _handleSubmit = (values) => {
    const { register, sendEmailVerification, dispatch } = this.props;
    const { navigate } = this.props.navigation;

    const onSubmitFail = ({ message }) => {
      showTopErrNotification({ title: ERR_MSG.REGISTER_FAIL_TITLE, message }, dispatch);
    };

    const onSubmitSuccess = () => {
      navigate(routeName.Registration.RegisterWelcome);
    };

    const updateUserProfile = () => {
      this._upadteUserProfile(values, onSubmitSuccess, onSubmitFail);
    };

    const createUserSuccess = () => {
      sendEmailVerification().then(updateUserProfile).catch(onSubmitFail);
    };

    register(values).then(createUserSuccess).catch(onSubmitFail);
  }

  _onSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this._handleSubmit)();
  }

  _onGgPressed = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '936670915515-4kv3lqhh031h4vksl04127jio97dear8.apps.googleusercontent.com',
        iosClientId: '936670915515-8jdk0mrv8u4fq32k44v8n5cp3ff8lfsg.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }

  _onFbPressed = async () => {
    const { signInWithFb, navigation: { navigate }, dispatch } = this.props;

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '1825757331088461',
      { permissions: ['public_profile', 'email'] }
    );

    const onFail = ({ message }) => {
      showTopErrNotification({ title: ERR_MSG.REGISTER_FAIL_TITLE, message }, dispatch);
    };

    const onSuccess = () => {
      this.props.authenticated();
      navigate(routeName.Authentication.UpdatePassword);
    };

    const updateUserProfile = () => {
      this._upadteUserProfile({}, onSuccess, onFail);
    };

    if (type === COMMON.SUCCESS) {
      signInWithFb(token).then(updateUserProfile).catch(onFail);
    }
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
          <Text style={styles._para}>
            Disclamer about information... study isetrinisetrin riesnt risetni ienars iaers
            eseiiieeseiiie einriseni reisn rsien Data breach aiers iers iersiers. ires ier ires u
            efir ir. iasrnti irsent Child Mind Institut d recontact?
          </Text>
        </ScrollView>
        <Btn onPress={this._onSubmit} text={'NEXT'} />
      </View>
    );
  }
}

RegisterFormContainer.propTypes = config.propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  register: authenticationCreateNewAccount,
  sendEmailVerification: authenticationSendEmailVerification,
  updateProfile: userUpdateProfile,
  signInWithFb: authenticationFb,
  authenticated: userAuthenticated
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(RegisterFormContainer));
