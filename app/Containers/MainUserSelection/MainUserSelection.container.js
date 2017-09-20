import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Button from '../../Components/FormButton/FormButton.component';

import styles from './MainUserSelection.container.styles';

export default class MainUserSelectionContainer extends Component {
_renderUser1 = () => (
  <View>
    <Button
      onPress={this._onLoginPress}
      text={'User 1'}
      btnStyle={styles.btn}
      textStyle={styles.btnText}
    />
  </View>
)
_renderUser2 = () => (
  <View>
    <Button
      onPress={this._onLoginPress}
      text={'User 2'}
      btnStyle={styles.btn}
    />
  </View>
)
render() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        {this._renderUser1()}
        {this._renderUser2()}
      </View>
    </View>
  );
}
}
