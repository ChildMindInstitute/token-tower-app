import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import Btn from '../../Components/FormButton/FormButton.component';

import { authenticationEmailPassword } from '../../Redux/Reducers/Authentication/Authentication.reducer';
import { userAuthenticated, userInitProfile } from '../../Redux/Reducers/User/User.reducer';

import styles from './Login.container.styles';

import config from './Login.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { required, emailValidation } from '../../Utilities/Validation.utils';
import { showTopErrNotification } from '../../Utilities/Form.util';
import { ERR_MSG } from '../../Utilities/Constant.utils';

class LoginContainer extends Component {
  _renderUserInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Email</Text>
      <Field
        name={'email'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        validate={[required, emailValidation]}
        keyboardType={'email-address'}
      />
    </View>
  );

  _renderPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        secureTextEntry validate={required}
      />
    </View>
  );

  _onForgot = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Authentication.ForgotPassword);
  }

  _onAuthenticated = () => {
    const { navigation: { navigate }, authenticated } = this.props;
    authenticated();
    navigate(routeName.Root.TokenTotem);
  }

  _onSubmitSuccess = ({ value: { emailVerified, providerData, uid } }) => {
    const { dispatch, initProfile } = this.props;

    const isFbOrGgProvider = providerData.find(p => p.providerId === 'facebook.com');

    if (emailVerified || isFbOrGgProvider) {
      return initProfile(uid)
        .then(this._onAuthenticated)
        .catch(this._onSubmitFail);
    }

    return showTopErrNotification({
      title: ERR_MSG.LOGIN_FAIL_TITLE,
      message: ERR_MSG.LOGIN_VERIFY_EMAIL
    }, dispatch);
  }

  _onSubmitFail = ({ message }) => {
    showTopErrNotification({
      title: ERR_MSG.LOGIN_FAIL_TITLE, message
    }, this.props.dispatch);
  }

  _handleSubmit = (values) => {
    const { authentication } = this.props;
    authentication(values)
      .then(this._onSubmitSuccess)
      .catch(this._onSubmitFail);
  };

  _onSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this._handleSubmit)();
  }

  render() {
    return (
      <View style={styles._container}>
        <KeyboardAwareScrollView style={styles._contentBlock}>
          <Header />
          <View style={styles._viewInput}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
          </View>
          <Btn
            onPress={this._onForgot}
            text={'Forgot?'} kind={'plain'}
            textStyle={styles._forgot}
          />
        </KeyboardAwareScrollView>
        <Btn onPress={this._onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  authentication: authenticationEmailPassword,
  authenticated: userAuthenticated,
  initProfile: userInitProfile
};

LoginContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(LoginContainer));
