import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import images from '../../Resources/Images';
import Input from '../../Components/FormInput/FormInput.component';

import styles from './RegisterForm.container.styles';
import { required } from '../../Utilities/Validation.utils';
import config from './RegisterForm.container.config';
import Constant from '../../Utilities/Constant.utils';
import routeName from '../../Navigation/RouteConfigs/Route.config';

class RegisterFormContainer extends Component {
  _renderUserInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>User</Text>
      <Field
        name={'username'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={' username '} validate={required}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles._input} containerStyle={styles._inputContainer}
        placeholder={' password '} secureTextEntry
        validate={required}
      />
    </View>
  )

  _renderEmailInput = () => (
    <View style={styles._inputContainerBlock}>
      <Text style={styles._label}>Email</Text>
      <Field
        keyboardType={'email-address'} name={'email'}
        component={Input} inputStyle={styles._input}
        containerStyle={styles._inputContainer}
        placeholder={' contact@example.com '}
        validate={required}
      />
    </View>
  )

  _onSubmitSuccess = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Registration.RegisterWelcome);
  }

  _onSubmitFail = () => { }

  _onSubmit = () => {
    this.props.handleSubmit(this._onSubmitSuccess)();
  }

  render() {
    return (
      <View style={styles._container}>
        <View style={styles._contentBlock}>
          <Header direction={Constant.DIRECTION.HORIZONTAL} />
          <View style={styles._inputBlock}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
            {this._renderEmailInput()}
          </View>
          <View style={styles._socialLogos}>
            <Text style={styles._logoText}>Or login with: </Text>
            <View style={styles._logos}>
              <Image resizeMode={'contain'} source={images.google} style={styles._image} />
              <Image resizeMode={'contain'} source={images.facebook} style={styles._image} />
            </View>
          </View>
          <Text style={styles._para}>
            Disclamer about information... study isetrinisetrin riesnt risetni ienars iaers
            eseiiieeseiiie einriseni reisn rsien Data breach aiers iers iersiers. ires ier ires u
            efir ir. iasrnti irsent Child Mind Institut d recontact?
          </Text>
        </View>
        <SubmitBtn onPress={this._onSubmit} text={'NEXT'} />
      </View>
    );
  }
}

RegisterFormContainer.propTypes = config.propTypes;

export default reduxForm(config.form)(RegisterFormContainer);
