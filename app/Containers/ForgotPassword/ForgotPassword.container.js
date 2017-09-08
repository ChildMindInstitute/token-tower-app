import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import Input from '../../Components/FormInput/FormInput.component';

import styles from './ForgotPassword.container.styles';

class ForgotPasswordContainer extends Component {
  _renderEmailInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Your Email</Text>
      <Field
        keyboardType={'email-address'}
        name={'email'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        placeholder={' contact@example.com '}
      />
    </View>
  )
  _renderPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Password</Text>
      <Field
        name={'password'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        placeholder={' password '}
        secureTextEntry
      />
    </View>
  )
  _renderConfirmPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.labelPassword}>Confirm Password</Text>
      <Field
        name={'confirmPassword'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        placeholder={' confirm password '}
        secureTextEntry
      />
    </View>
  )
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={'horizontal'} />
          <View style={styles.formView}>
            <Text style={styles.title}>Password Help</Text>
            {this._renderEmailInput()}
            {this._renderPasswordInput()}
            {this._renderConfirmPasswordInput()}
          </View>
        </View>
        <SubmitBtn onPress={this._onNext} text={'SUBMIT'} />
      </View>
    );
  }
}
export default reduxForm({
  form: 'forgotPasswordForm'
})(ForgotPasswordContainer);
