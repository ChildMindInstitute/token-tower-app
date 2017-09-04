import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import SubmitBtn from '../../Components/FormButton/FormButton.component';

import styles from './RegisterPermission.container.styles';

export default class RegisterPermissionContainer extends Component {
  state = { p1: true, p2: false, p3: true }

  _onNext = () => {
    const { navigate } = this.props.navigation;
    navigate('RegisterForm');
  }

  _renderDescription = () => (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>
        Description: Token Totem airsnetriasent rasitenrasi es aie aries iarense
        riseaneirie seire ire irenas tneransetariufi eari ufu riuf iri.
        urifu irau furiuf iruf uafiaui r.
      </Text>
    </View>
  )

  _renderPermission = () => (
    <View style={styles.permissionContainer}>
      <Text style={styles.consent}>Consent</Text>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Switch value={this.state.p1} onValueChange={(value) => { this.setState({ p1: value }) }} />
      </View>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Switch value={this.state.p2} onValueChange={(value) => { this.setState({ p2: value }) }} />
      </View>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Switch value={this.state.p3} onValueChange={(value) => { this.setState({ p3: value }) }} />
      </View>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={'horizontal'} />
          <View style={styles.content}>
            {this._renderDescription()}
            {this._renderPermission()}
          </View>
        </View>
        <SubmitBtn onPress={this._onNext} text={'NEXT'} />
      </View>
    );
  }
}
