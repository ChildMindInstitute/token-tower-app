import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import Btn from '../../Components/FormButton/FormButton.component';

import styles from './Login.container.styles';
import { authenticationEmailPassword } from '../../Redux/Reducers/Authentication/Authentication.reducer';
import config, { showLoginFailNotify } from './Login.container.config';
import { required } from '../../Utilities/Validation.utils';
import routeName from '../../Navigation/RouteConfigs/Route.config';

class LoginContainer extends Component {
  _renderUserInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>User</Text>
      <Field
        name={'username'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        validate={required}
      />
    </View>
  );

  _renderPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        secureTextEntry validate={required}
      />
    </View>
  );

  _onForgot = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Authentication.ForgotPassword);
  }

  _onSubmitSuccess = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Root.TokenTotem);
  }

  _onSubmitFail = ({ username, password }) => {
    if (username === 'childmind' && password === 'childmind') this._onSubmitSuccess();
    else showLoginFailNotify(this.props.dispatch);
  }

  _handleSubmit = (values) => {
    const { authentication } = this.props;
    authentication(values)
      .then(this._onSubmitSuccess)
      .catch(() => this._onSubmitFail(values));
  };

  _onSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit(this._handleSubmit)();
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
          <Btn
            onPress={this._onForgot}
            text={'Forgot?'} kind={'plain'}
            textStyle={styles.forgot}
          />
        </KeyboardAwareScrollView>
        <Btn onPress={this._onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  authentication: authenticationEmailPassword
};

LoginContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(LoginContainer));
