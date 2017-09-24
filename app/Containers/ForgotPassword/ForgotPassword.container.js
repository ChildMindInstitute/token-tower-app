import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import { authenticationForgotPassword } from '../../Redux/Reducers/Authentication/Authentication.reducer';

import styles from './ForgotPassword.container.styles';

import config from './ForgotPassword.container.config';
import { showTopSuccessNotification, showTopErrNotification } from '../../Utilities/Form.util';
import { required, minLength, emailValidation } from '../../Utilities/Validation.utils';
import { DIRECTION } from '../../Utilities/Constant.utils';

class ForgotPasswordContainer extends Component {
  constructor() {
    super();
    this.passwordValidation = [minLength(6)];
    this.emailValidation = [required, emailValidation];
  }

  _renderEmailInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Your Email</Text>
      <Field
        keyboardType={'email-address'}
        name={'email'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'contact@example.com'} validate={this.emailValidation}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'password'}
        validate={this.passwordValidation} secureTextEntry
      />
    </View>
  )

  _renderConfirmPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Confirm Password</Text>
      <Field
        name={'confirmPassword'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'confirm password'}
        validate={this.passwordValidation} secureTextEntry
      />
    </View>
  )

  _handleSubmit = ({ email, password }) => {
    const { forgotPassword } = this.props;
    forgotPassword({ email, password })
      .then(this._onSubmitSuccess)
      .catch(this._onSubmitFail);
  }

  _onSubmitSuccess = ({ value: { data: { message } } }) => {
    const { navigation, dispatch } = this.props;
    showTopSuccessNotification({
      title: 'CHANGE PASSWORD',
      message
    }, dispatch);
    navigation.goBack();
  }

  _onSubmitFail = ({ response: { data: { message } } }) => {
    const { dispatch } = this.props;
    showTopErrNotification({
      title: 'CHANGE PASSWORD',
      message
    }, dispatch);
  }

  _onSubmit = () => {
    this.props.handleSubmit(this._handleSubmit)();
  }

  render() {
    return (
      <View style={styles._container}>
        <View style={styles._contentBlock}>
          <Header direction={DIRECTION.HORIZONTAL} />
          <View style={styles._formView}>
            <Text style={styles._title}>Password Help</Text>
            <View style={styles._form}>
              {this._renderEmailInput()}
              {this._renderPasswordInput()}
              {this._renderConfirmPasswordInput()}
            </View>
          </View>
        </View>
        <SubmitBtn onPress={this._onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  forgotPassword: authenticationForgotPassword
};

ForgotPasswordContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(ForgotPasswordContainer));
