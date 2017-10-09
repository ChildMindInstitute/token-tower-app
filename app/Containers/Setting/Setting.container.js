import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';
import FormSwitch from '../../Components/FormSwitch/FormSwitch.component';

import styles from './Setting.container.styles';

import config from './Setting.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { required, numberValidation } from '../../Utilities/Validation.utils';

class SettingContainer extends Component {
  state = {}

  _renderTokens = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>
        How many tokens do you want to start with?
      </Text>
      <View style={styles._fieldBlock}>
        <Field
          keyboardType={'numeric'}
          name={'tokens'}
          component={Input}
          inputStyle={styles._input}
          containerStyle={styles._inputContainer}
          validate={numberValidation}
        />
      </View>
    </View>
  )

  _onLayout = (event) => {
    const { nativeEvent: { layout: { width } } } = event;
    this.setState({ dropdownViewWidth: width });
  };

  _renderReplenish = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>
        How often do you want to replenish the tokens?
      </Text>
      <View style={styles._fieldBlock} onLayout={this._onLayout}>
        <ModalDropdown
          dropdownStyle={{ ...styles._dropdownStyle, width: this.state.dropdownViewWidth }}
          style={styles._inputDropdown}
          options={['daily', 'weekly', 'monthly']}
          dropdownTextStyle={styles._dropdownTextStyle}
          textStyle={styles._textStyle}
        />
      </View>
    </View>
  )

  _renderPair = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Pair app (child's) name</Text>
      <View style={styles._fieldBlock}>
        <Field
          name={'pairApp'}
          component={Input}
          inputStyle={styles._input}
          containerStyle={styles._inputContainer}
          validate={required}
        />
      </View>
    </View>
  )

  _onSubmitSuccess = () => {

  }

  _handleSubmit = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Root.TokenTotemTutorial);
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

export default (reduxForm(config.form)(SettingContainer));
