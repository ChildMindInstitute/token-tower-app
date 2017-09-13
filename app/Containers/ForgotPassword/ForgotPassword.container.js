import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import Input from '../../Components/FormInput/FormInput.component';

import styles from './ForgotPassword.container.styles';
import { required } from '../../Utilities/Validation.utils';
import config from './ForgotPassword.container.config';
import Constant from '../../Utilities/Constant.utils';

class ForgotPasswordContainer extends Component {
  _renderEmailInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Your Email</Text>
      <Field
        keyboardType={'email-address'}
        name={'email'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        placeholder={' contact@example.com '} validate={required}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        placeholder={' password '}
        validate={required} secureTextEntry
      />
    </View>
  )

  _renderConfirmPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Confirm Password</Text>
      <Field
        name={'confirmPassword'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        placeholder={' confirm password '}
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
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={Constant.DIRECTION.HORIZONTAL} />
          <View style={styles.formView}>
            <Text style={styles.title}>Password Help</Text>
            {this._renderEmailInput()}
            {this._renderPasswordInput()}
            {this._renderConfirmPasswordInput()}
          </View>
        </View>
        <SubmitBtn onPress={this._onSubmit} text={'SUBMIT'} />
      </View>
    );
  }
}

ForgotPasswordContainer.propTypes = config.propTypes;

export default reduxForm(config.form)(ForgotPasswordContainer);
