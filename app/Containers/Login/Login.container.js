import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './Login.container.styles';

export default class LoginContainer extends Component {
  componentDidMount() {

  }

  _renderUserInput = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>User</Text>
      <TextInput style={styles.input} />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Password</Text>
      <TextInput secureTextEntry style={styles.input} />
    </View>
  );

  _onSubmit = () => {
    axios.post('http://localhost:3000/api/users/authenticate',
      {
        username: 'nam',
        password: 'nam'
      }).then(({ data }) => { console.log(data); })
      .catch((e) => { alert('can not login') });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
          {this._renderUserInput()}
          {this._renderPasswordInput()}
          <Text style={styles.forgot}>Forgot?</Text>
        </View>
        <TouchableOpacity onPress={this._onSubmit}>
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
