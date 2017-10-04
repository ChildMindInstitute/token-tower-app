import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';
import FormSwitch from '../../Components/FormSwitch/FormSwitch.component';

import styles from './RegisterPermission.container.styles';

import config from './RegisterPermission.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { DIRECTION } from '../../Utilities/Constant.utils';

class RegisterPermissionContainer extends Component {
  _onNext = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Registration.RegisterForm);
  }

  _renderDescription = () => (
    <View style={styles._descriptionContainer}>
      <Text style={styles._description}>
        Description: Token Totem airsnetriasent rasitenrasi es aie aries iarense
        riseaneirie seire ire irenas tneransetariufi eari ufu riuf iri.
        urifu irau furiuf iruf uafiaui r.
      </Text>
    </View>
  )

  _renderPermission = () => (
    <View style={styles._permissionContainer}>
      <Text style={styles._consent}>Consent</Text>
      <View style={styles._permissionBlock}>
        <Text style={styles._permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Field name={'permission1'} component={FormSwitch} />
      </View>
      <View style={styles._permissionBlock}>
        <Text style={styles._permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Field name={'permission2'} component={FormSwitch} />
      </View>
      <View style={styles._permissionBlock}>
        <Text style={styles._permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Field name={'permission3'} component={FormSwitch} />
      </View>
    </View>
  )

  render() {
    return (
      <View style={styles._container}>
        <ScrollView style={styles._contentBlock}>
          <Header direction={DIRECTION.HORIZONTAL} />
          <View style={styles._content}>
            {this._renderDescription()}
            {this._renderPermission()}
          </View>
        </ScrollView>
        <Btn onPress={this._onNext} text={'NEXT'} />
      </View>
    );
  }
}

RegisterPermissionContainer.propTypes = config.propTypes;

export default reduxForm(config.form)(RegisterPermissionContainer);
