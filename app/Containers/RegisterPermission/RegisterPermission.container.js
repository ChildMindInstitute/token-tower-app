import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';
import FormSwitch from '../../Components/FormSwitch/FormSwitch.component';

import styles from './RegisterPermission.container.styles';

import config from './RegisterPermission.container.config';
import { showTopErrNotification } from '../../Utilities/Form.util';
import routeName from '../../Navigation/RouteConfigs/Route.config';
import { DIRECTION, ERR_MSG } from '../../Utilities/Constant.utils';

class RegisterPermissionContainer extends Component {
  _renderDescription = () => (
    <View style={styles._descriptionContainer}>
      <Text style={styles._description}>
        This app provides a convenient and fun way to keep track of desired
      or undesired behaviors and to reward or punish those behaviors by adding
       or removing tokens from a daily allowance.
       A preset goal is achieved if enough tokens are saved.
       If parents have registered themselves and paired their child,
       it is the parents who can add or remove tokens from their child’s app.
      </Text>
    </View>
  )

  _renderPermission = () => (
    <View style={styles._permissionContainer}>
      <Text style={styles._consent}>Consent</Text>
      <View style={styles._permissionBlock}>
        <Text style={styles._permissionText}>
          I understand that performing certain activities or answering
        certain questions can be uncomfortable, and there is no
         obligation to complete every task or questionnaire.
        </Text>
        <Field name={'canPerforming'} component={FormSwitch} />
      </View>
      <View style={styles._permissionBlock}>
        <Text style={styles._permissionText}>
          I will allow the Child Mind Institute to store data
         from the use of this app on a secure cloud server,
         and to access this information for clinical and research
         purposes.
        </Text>
        <Field name={'canStoreData'} component={FormSwitch} />
      </View>
      <View style={styles._permissionBlock}>
        <Text style={styles._permissionText}>
          I permit the Child Mind Institute to contact me
         regarding information gathered from this app for
          clinical or research purposes. (Optional)
        </Text>
        <Field name={'canContact'} component={FormSwitch} />
      </View>
    </View>
  )

  _handleSubmit = ({ canPerforming, canStoreData }) => {
    const { dispatch, navigation: { navigate } } = this.props;

    if (!canPerforming || !canStoreData) {
      showTopErrNotification({
        title: ERR_MSG.REGISTER_ERROR_TITLE,
        message: ERR_MSG.PERMISSION_AGREEMENT
      }, dispatch);
    } else navigate(routeName.Registration.RegisterForm);
  }

  render() {
    return (
      <View style={styles._container}>
        <ScrollView style={styles._contentBlock}>
          <Header direction={DIRECTION.HORIZONTAL} />
          {this._renderDescription()}
          {this._renderPermission()}
        </ScrollView>
        <Btn onPress={this.props.handleSubmit(this._handleSubmit)} text={'NEXT'} />
      </View>
    );
  }
}

RegisterPermissionContainer.propTypes = config.propTypes;

export default reduxForm(config.form)(RegisterPermissionContainer);
