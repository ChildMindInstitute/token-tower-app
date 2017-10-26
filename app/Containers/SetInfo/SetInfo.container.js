import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTowerHeader/TokenTowerHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import {
  userUpdatePassword, userUpdateBasicProfile, userUpdateProfile, userInitProfile
} from '../../Redux/Reducers/User/User.reducer';

import styles from './SetInfo.container.styles';

import config from './SetInfo.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { showTopErrNotification } from '../../Utilities/Form.util';
import { require, minLength } from '../../Utilities/Validation.utils';
import { DIRECTION, ERR_MSG } from '../../Utilities/Constant.utils';

class SetInfoContainer extends Component {
  constructor() {
    super();
    this.passwordValidation = [minLength(6)];
  }

  _renderEmail = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Email</Text>
      <Input
        inputStyle={{ ...styles._input, ...styles._backgroundGrey }}
        editable={false} input={{ value: this.props.user.email }}
        meta={{}} containerStyle={styles._inputContainer}
      />
    </View>
  )

  _renderUsername = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>User</Text>
      <Field
        name={'username'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'username'}
        validate={require}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'password'} secureTextEntry
        validate={this.passwordValidation}
      />
    </View>
  )

  _renderConfirmPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Confirm Password</Text>
      <Field
        name={'confirmPassword'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={'confirm password'} secureTextEntry
        validate={this.passwordValidation}
      />
    </View>
  )


  _handleSubmit = ({ username, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      throw new SubmissionError({ confirmPassword: ERR_MSG.PASSWORD_NOT_MATCH });
    }

    const { updatePassword, updateBasicProfile, updateProfile, initProfile, user } = this.props;
    updatePassword(password)
      .then(() => updateBasicProfile({ username }))
      .then(({ value: { displayName } }) => updateProfile({ ...user, displayName }))
      .then(({ value }) => initProfile(value))
      .then(this._onSubmitSuccess)
      .catch(this._onSubmitFail);
  }

  _onSubmitSuccess = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Root.Config);
  }

  _onSubmitFail = ({ message }) => {
    const { dispatch } = this.props;
    showTopErrNotification({
      title: ERR_MSG.UPDATE_PASSWORD_TITLE,
      message
    }, dispatch);
  }

  render() {
    return (
      <View style={styles._container}>
        <KeyboardAwareScrollView style={styles._contentBlock}>
          <Header direction={DIRECTION.HORIZONTAL} />
          <View style={styles._formView}>
            <Text style={styles._hello}>{`Hi ${this.props.user.displayName}`}</Text>
            <Text style={styles._title}>Please set your password.</Text>
            <View style={styles._form}>
              {this._renderEmail()}
              {this._renderUsername()}
              {this._renderPasswordInput()}
              {this._renderConfirmPasswordInput()}
            </View>
          </View>
        </KeyboardAwareScrollView>
        <SubmitBtn onPress={this.props.handleSubmit(this._handleSubmit)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  initialValues: {
    username: state.user.displayName
  }
});
const mapDispatchToProps = {
  updatePassword: userUpdatePassword,
  updateBasicProfile: userUpdateBasicProfile,
  updateProfile: userUpdateProfile,
  initProfile: userInitProfile
};

SetInfoContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(SetInfoContainer));
