import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import ModalDropdown from 'react-native-modal-dropdown';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import styles from './Setting.container.styles';

class SettingContainer extends Component {
  state = { p1: true }

  _renderTokens = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>
        How many tokens do you want to start with?
      </Text>
      <View style={styles._fieldBlock}>
        <Field
          name={'tokens'}
          component={Input}
          inputStyle={styles._input}
          containerStyle={styles._inputContainer}
        />
      </View>
    </View>

  )
  _renderReplenish = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>
        How often do you want to replenish the tokens?
      </Text>
      <View style={styles._fieldBlock}>
        <ModalDropdown
          dropdownStyle={styles._dropdownStyle}
          style={styles._input}
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
        />
      </View>
    </View>
  )
  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate('Tutorial');
  };

  render() {
    return (
      <View style={styles._container}>
        <View style={styles._contentBlock}>
          <Header direction={'horizontal'} />
          <View style={styles._content}>
            <Text style={styles._title}>Setup</Text>
            {this._renderTokens()}
            {this._renderReplenish()}
            {this._renderPair()}
            <View style={styles._inputContainerBlock}>
              <Text style={styles._label}>Sound effects to accompany animations?</Text>
              <Switch value={this.state.p1} onValueChange={(value) => { this.setState({ p1: value }); }} />
            </View>
          </View>
        </View>
        <SubmitBtn onPress={this._onClick} text={'Take the tour!'} />
      </View>
    );
  }
}
export default reduxForm({
  form: 'settingsForm'
})(SettingContainer);
