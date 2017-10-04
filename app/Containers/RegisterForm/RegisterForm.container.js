import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import {
  authenticationCreateNewAccount,
  authenticationSendEmailVerification
} from '../../Redux/Reducers/Authentication/Authentication.reducer';
import { userUpdateProfile } from '../../Redux/Reducers/User/User.reducer';

import images from '../../Resources/Images';
import styles from './RegisterForm.container.styles';

import config from './RegisterForm.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { required, minLength, maxLength, emailValidation } from '../../Utilities/Validation.utils';
import { DIRECTION, ERR_MSG } from '../../Utilities/Constant.utils';
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

  _handleSubmit = (values) => {
    const { register, sendEmailVerification, updateProfile, dispatch } = this.props;
    const { navigate } = this.props.navigation;

    const _onSubmitFail = ({ message }) => {
      showTopErrNotification({ title: ERR_MSG.LOGIN_FAIL_TITLE, message }, dispatch);
    };

    const _onSubmitSuccess = () => {
      navigate(routeName.Registration.RegisterWelcome);
    };

    const _updateUserProfile = () => {
      updateProfile(values).then(_onSubmitSuccess).catch(_onSubmitFail);
    };

    const _createUserSuccess = () => {
      sendEmailVerification().then(_updateUserProfile).catch(_onSubmitFail);
    };

    register(values).then(_createUserSuccess).catch(_onSubmitFail);
  }

  _onSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this._handleSubmit)();
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
              <TouchableOpacity style={styles._logos}>
                <Image resizeMode={'contain'} source={images.google} style={styles._image} />
              </TouchableOpacity>
              <TouchableOpacity style={styles._logos}>
                <Image resizeMode={'contain'} source={images.facebook} style={styles._image} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles._para}>
            Disclamer about information... study isetrinisetrin riesnt risetni ienars iaers
            eseiiieeseiiie einriseni reisn rsien Data breach aiers iers iersiers. ires ier ires u
            efir ir. iasrnti irsent Child Mind Institut d recontact?
          </Text>
        </ScrollView>
        <SubmitBtn onPress={this._onSubmit} text={'NEXT'} />
      </View>
    );
  }
}

RegisterFormContainer.propTypes = config.propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  register: authenticationCreateNewAccount,
  sendEmailVerification: authenticationSendEmailVerification,
  updateProfile: userUpdateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(RegisterFormContainer));
