import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Input from '../../Components/FormInput/FormInput.component';

import styles from './Setting.container.styles';

class SettingContainer extends Component {
  state = { p1: true }

  _renderTokens = () => (
    <View style={styles.viewInput}>
      <Text style={styles.text}>
    How many tokens do you want to start with?
      </Text>
      <Field
        name={'username'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={{ flex: 1, flexDirection: 'row' }}
      />
    </View>

  )
  _renderReplenish = () => (
    <View style={styles.viewInput}>
      <Text style={styles.text}>
      How often do you want to replenish the tokens?
      </Text>
      <Field
        name={'replenish'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={{ flex: 1, flexDirection: 'row' }}
      />
    </View>
  )
  _renderPair = () => (
    <View style={styles.viewInput}>
      <Text style={styles.text}>Pair app (child's) name</Text>
      <Field
        name={'pairApp'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={{ flex: 1, flexDirection: 'row' }}
      />
    </View>
  )
  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate('Tour');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={'horizontal'} />
          <View style={styles.content}>
            <Text style={styles.title}>Setup</Text>
            {this._renderTokens()}
            {this._renderReplenish()}
            {this._renderPair()}
            <View style={styles.viewInput}>
              <Text style={styles.text}>Sound effects to accompany animations?</Text>
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
  form: 'form'
})(SettingContainer);
