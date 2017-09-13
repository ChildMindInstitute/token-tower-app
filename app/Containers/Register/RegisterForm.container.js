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
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>User</Text>
      <Field
        name={'username'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        placeholder={' username '} validate={required}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Password</Text>
      <Field
        name={'password'} component={Input}
        inputStyle={styles.input} containerStyle={styles.inputContainer}
        placeholder={' password '} secureTextEntry
        validate={required}
      />
    </View>
  )

  _renderEmailInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Email</Text>
      <Field
        keyboardType={'email-address'} name={'email'}
        component={Input} inputStyle={styles.input}
        containerStyle={styles.inputContainer}
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
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={Constant.DIRECTION.HORIZONTAL} />
          <View style={styles.inputBlock}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
            {this._renderEmailInput()}
          </View>
          <View style={styles.socialLogos}>
            <Text style={styles.logoText}>Or login with: </Text>
            <View style={styles.logos}>
              <Image resizeMode={'contain'} source={images.google} style={styles.image} />
              <Image resizeMode={'contain'} source={images.facebook} style={styles.image} />
            </View>
          </View>
          <Text style={styles.para}>
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
