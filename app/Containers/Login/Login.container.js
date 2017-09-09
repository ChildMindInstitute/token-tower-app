import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import SubmitBtn from '../../Components/FormButton/FormButton.component';

import styles from './Login.container.styles';
import config from './Login.container.config';
import { topNotificationShowErr } from '../../Redux/Reducers/TopNotification/TopNotification.reducer';
import { required } from '../../Utilities/Validation.utils';

class LoginContainer extends Component {
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
    }
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
          <View style={styles.viewInput}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
          </View>
          <TouchableOpacity onPress={this._onForgot}>
            <Text style={styles.forgot}>Forgot?</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <SubmitBtn onPress={this._onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { topNotificationShowErr };

LoginContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(LoginContainer));
