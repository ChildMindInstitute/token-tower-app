import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTowerHeader/TokenTowerHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import { authenticationForgotPassword } from '../../Redux/Reducers/Authentication/Authentication.reducer';

import styles from './ForgotPassword.container.styles';

import config from './ForgotPassword.container.config';
import { showTopSuccessNotification, showTopErrNotification } from '../../Utilities/Form.util';
import { required, emailValidation } from '../../Utilities/Validation.utils';
import { DIRECTION, ERR_MSG, MSG } from '../../Utilities/Constant.utils';

class ForgotPasswordContainer extends Component {
  constructor() {
    super();
    this.emailValidation = [required, emailValidation];
  }

  _renderEmailInput = () => (
    <View style={styles._inputContainerBlock}>
      <Field
        keyboardType={'email-address'}
        name={'email'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'contact@example.com'} validate={this.emailValidation}
      />
    </View>
  )

  _handleSubmit = ({ email }) => {
    const { forgotPassword } = this.props;
    forgotPassword({ email })
      .then(this._onSubmitSuccess)
      .catch(this._onSubmitFail);
  }

  _onSubmitSuccess = () => {
    const { navigation, dispatch } = this.props;
    showTopSuccessNotification({
      title: MSG.RESET_PASSWORD_TITLE,
      message: MSG.VERIFY_MAIL_CHANGE_PASSWORD
    }, dispatch);
    navigation.goBack();
  }

  _onSubmitFail = () => {
    const { dispatch } = this.props;
    showTopErrNotification({
      title: ERR_MSG.RESET_PASSWORD_TITLE,
      message: 'There is no user record corresponding to this identifier.'
    }, dispatch);
  }

  render() {
    return (
      <View style={styles._container}>
        <View style={styles._contentBlock}>
          <Header direction={DIRECTION.HORIZONTAL} />
          <View style={styles._formView}>
            <Text style={styles._title}>Enter Your Email:</Text>
            <View style={styles._form}>
              {this._renderEmailInput()}
            </View>
          </View>
        </View>
        <SubmitBtn onPress={this.props.handleSubmit(this._handleSubmit)} />
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
