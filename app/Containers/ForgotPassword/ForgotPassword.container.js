import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import Input from '../../Components/FormInput/FormInput.component';

import styles from './ForgotPassword.container.styles';
import { required } from '../../Utilities/Validation.utils';
import config from './ForgotPassword.container.config';
import { DIRECTION } from '../../Utilities/Constant.utils';

class ForgotPasswordContainer extends Component {
  _renderEmailInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Your Email</Text>
      <Field
        keyboardType={'email-address'}
        name={'email'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'contact@example.com'} validate={required}
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
        validate={required} secureTextEntry
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
        validate={required} secureTextEntry
      />
    </View>
  )

  _onSubmitSuccess = () => {
    const { navigate } = this.props.navigation;
    navigate('');
  }

  _onSubmitFail = () => { }

  _onSubmit = () => {
    this.props.handleSubmit(this._onSubmitSuccess)();
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
        <SubmitBtn onPress={this._onSubmit} text={'SUBMIT'} />
      </View>
    );
  }
}

ForgotPasswordContainer.propTypes = config.propTypes;

export default reduxForm(config.form)(ForgotPasswordContainer);
