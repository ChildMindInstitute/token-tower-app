import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import FormSwitch from '../../Components/FormSwitch/FormSwitch.component';
import FormDropdown from '../../Components/FormDropdown/FormDropdown.component';

import styles from './Setting.container.styles';

import { userUpdateProfile, userInitProfile } from '../../Redux/Reducers/User/User.reducer';

import config from './Setting.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { required, greaterThanZero } from '../../Utilities/Validation.utils';
import { REPLENISH_TOKEN_TYPE } from '../../Utilities/Constant.utils';
import { strToNumber, toString } from '../../Utilities/Format.utils';

class SettingContainer extends Component {
  state = {}

  _onLayout = (event) => {
    const { nativeEvent: { layout: { width } } } = event;
    this.setState({ dropdownViewWidth: width });
  };

  _renderTokens = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>
        How many tokens do you want to start with?
      </Text>
      <View style={styles._fieldBlock}>
        <Field
          name={'initialToken'} component={Input}
          containerStyle={styles._inputContainer} inputStyle={styles._input}
          validate={greaterThanZero}
          parse={strToNumber} format={toString}
          keyboardType={'numeric'}
        />
      </View>
    </View>
  )

  _renderReplenish = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>
        How often do you want to replenish the tokens?
      </Text>
      <View style={styles._fieldBlock} onLayout={this._onLayout}>
        <Field
          component={FormDropdown} name={'replenishTokenType'}
          containerStyle={styles._dropdownContainerStyle}
          dropdownStyle={{ ...styles._dropdownStyle, width: this.state.dropdownViewWidth }}
          style={styles._inputDropdown}
          options={[REPLENISH_TOKEN_TYPE.DAILY, REPLENISH_TOKEN_TYPE.WEEKLY, REPLENISH_TOKEN_TYPE.MONTHLY]}
          dropdownTextStyle={styles._dropdownTextStyle}
          textStyle={styles._textStyle}
          validate={required}
        />
      </View>
    </View>
  )

  _renderPair = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>{'Pair app (child\'s) name'}</Text>
      <View style={styles._fieldBlock}>
        <Field
          name={'childName'}
          component={Input}
          inputStyle={styles._input}
          containerStyle={styles._inputContainer}
          validate={required}
        />
      </View>
    </View>
  )

  _onSubmitSuccess = () => {
    const { user: { isFirstTutorial }, navigation: { navigate } } = this.props;
    if (isFirstTutorial) navigate(routeName.Root.TokenTotemTutorial);
    else navigate(routeName.Root.TokenTotem);
  }

  _handleSubmit = ({ initialToken, replenishTokenType, childName, canAnimation }) => {
    const { updateProfile, initProfile, user } = this.props;
    const userData = {
      ...user,
      initialToken,
      replenishTokenType,
      child: { name: childName },
      canAnimation
    };
    updateProfile(userData)
      .then(({ value }) => initProfile(value))
      .then(this._onSubmitSuccess);
  }

  render() {
    return (
      <View style={styles._container}>
        <KeyboardAwareScrollView style={styles._contentBlock}>
          <Header direction={'horizontal'} />
          <View style={styles._content}>
            <Text style={styles._title}>Setup</Text>
            {this._renderTokens()}
            {this._renderReplenish()}
            {this._renderPair()}
            <View style={styles._inputContainerBlock}>
              <Text style={styles._label}>Sound effects to accompany animations?</Text>
              <Field name={'canAnimation'} component={FormSwitch} />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <SubmitBtn onPress={this.props.handleSubmit(this._handleSubmit)} text={'Take the tour!'} />
      </View>
    );
  }
}

SettingContainer.propTypes = config.propTypes;

const mapStateToProps = state => ({
  user: state.user,
  initialValues: {
    canAnimation: state.user.canAnimation,
    initialToken: state.user.initialToken,
    replenishTokenType: state.user.replenishTokenType,
    childName: state.user.child && state.user.child.name
  }
});

const mapDispatchToProps = {
  updateProfile: userUpdateProfile,
  initProfile: userInitProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(SettingContainer));
