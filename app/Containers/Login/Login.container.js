import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import SubmitBtn from '../../Components/FormButton/FormButton.component';

import styles from './Login.container.styles';

const required = value => (_.isEmpty(value) ? 'Required' : undefined);

class LoginContainer extends Component {
  componentDidMount() {
    MessageBarManager.registerMessageBar(this.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  _renderUserInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>User</Text>
      <Field
        name={'username'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        validate={required}
      />
    </View>
  );

  _renderPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Password</Text>
      <Field
        name={'password'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        secureTextEntry
        validate={required}
      />
    </View>
  );
  _onForgot = () => {
    const { navigate } = this.props.navigation;
    navigate('ForgotPassword');
  }
  _onSubmitSuccess = () => {
    const { navigate } = this.props.navigation;
    navigate('Splash');
  }

  _onSubmitFail = ({ username, password }) => {
    if (username === 'childmind' && password === 'childmind') {
      this._onSubmitSuccess();
      return;
    }
    MessageBarManager.showAlert({
      title: 'Login fail',
      message: 'Invalid username and password',
      alertType: 'error'
    });
  }

  _onSubmit = () => {
    this.props.handleSubmit((values) => {
      axios.post('http://localhost:3000/api/users/authenticate',
        {
          username: 'nam',
          password: 'nam'
        }).then(this._onSubmitSuccess)
        .catch(() => this._onSubmitFail(values));
    })();
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView style={styles.contentBlock}>
          <Header />
          {this._renderUserInput()}
          {this._renderPasswordInput()}
          <TouchableOpacity onPress={this._onForgot}>
            <Text style={styles.forgot}>Forgot?</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <SubmitBtn onPress={this._onSubmit} />
        <MessageBar ref={(ref) => { this.alert = ref; }} />
      </View>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginContainer);
