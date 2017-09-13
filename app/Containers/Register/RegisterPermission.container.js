import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';
import FormSwitch from '../../Components/FormSwitch/FormSwitch.component';

import styles from './RegisterPermission.container.styles';
import config from './RegisterPermission.container.config';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import Constant from '../../Utilities/Constant.utils';

class RegisterPermissionContainer extends Component {
  _onNext = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Registration.RegisterForm);
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
        <Field name={'permission1'} component={FormSwitch} />
      </View>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Field name={'permission2'} component={FormSwitch} />
      </View>
      <View style={styles.permissionBlock}>
        <Text style={styles.permissionText}>Pilot study irsetn iensrt insrininirnsitnriesnite</Text>
        <Field name={'permission3'} component={FormSwitch} />
      </View>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={Constant.DIRECTION.HORIZONTAL} />
          <View style={styles.content}>
            {this._renderDescription()}
            {this._renderPermission()}
          </View>
        </View>
        <Btn onPress={this._onNext} text={'NEXT'} />
      </View>
    );
  }
}

RegisterPermissionContainer.propTypes = config.propTypes;

export default reduxForm(config.form)(RegisterPermissionContainer);
