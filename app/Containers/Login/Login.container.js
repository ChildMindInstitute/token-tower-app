import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import SubmitBtn from '../../Components/FormButton/FormButton.component';

import styles from './Login.container.styles';

class LoginContainer extends Component {
  _renderUserInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>User</Text>
      <Field
        name={'username'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
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
      />
    </View>
  );

  _onSubmitSuccess = () => {
    const { navigate } = this.props.navigation;
    navigate('Splash');
  }

  _onSubmit = () => {
    axios.post('http://localhost:3000/api/users/authenticate',
      {
        username: 'nam',
        password: 'nam'
      }).then(({ data }) => { this._onSubmitSuccess(data); })
      .catch((e) => { this._onSubmitSuccess(e); });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.contentBlock} behavior={'position'}>
          <Header />
          {this._renderUserInput()}
          {this._renderPasswordInput()}
          <Text style={styles.forgot}>Forgot?</Text>
        </KeyboardAvoidingView>
        <SubmitBtn onPress={this._onSubmit} />
      </View>
    );
  }
}

export default reduxForm({
  form: 'form'
})(LoginContainer);
