import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import SubmitBtn from '../../Components/FormButton/FormButton.component';

import styles from './RegisterPermission.container.styles';

export default class RegisterPermissionContainer extends Component {
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
        <Switch disabled value />
      </View>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Switch disabled value={false} />
      </View>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Switch disabled value />
      </View>
    </View>
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 30 }}>
          <Header direction={'horizontal'} />
          <View style={styles.content}>
            {this._renderDescription()}
            {this._renderPermission()}
          </View>
        </View>
        <SubmitBtn onPress={this._onNext} text={'NEXT'}/>
      </View>
    );
  }
}
