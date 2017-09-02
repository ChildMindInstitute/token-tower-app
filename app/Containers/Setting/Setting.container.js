import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import styles from './Setting.container.styles';

class SettingContainer extends Component {
  _renderTokens = () => (
    <View style={styles.viewInput}>
      <Text style={styles.text}>
      How many tokens do you want to start with?
      </Text>
      <TextInput style={styles.input} />
    </View>
  )
  _renderReplenish = () => (
    <View style={styles.viewInput}>
      <Text style={styles.text}>
      How often do you want to replenish the tokens?
      </Text>
      <TextInput style={styles.input} />
    </View>
  )
  _renderPair = () => (
    <View style={styles.viewInput}>
      <Text style={styles.text}>Pair app (child's) name</Text>
      <TextInput style={styles.input} />
    </View>
  )
  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate('Tour');
  };

  render() {
    return (
      <View>
        <Header direction={'horizontal'} />
        <Text style={styles.title}>Setup</Text>
        {this._renderTokens()}
        {this._renderReplenish()}
        {this._renderPair()}
        <TouchableOpacity onPress={this._onClick} style={styles.btn}>
          <Text style={styles.btnText}>Take the tour!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SettingContainer;
