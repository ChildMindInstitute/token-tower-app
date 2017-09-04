import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import SubmitBtn from '../../Components/FormButton/FormButton.component';
import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import images from '../../Resources/Images';
import Input from '../../Components/FormInput/FormInput.component';

import styles from './RegisterForm.container.styles';

class RegisterFormContainer extends Component {
  _onNext = () => {
    const { navigate } = this.props.navigation;
    navigate('RegisterWelcome');
  }

  _renderUserInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>User</Text>
      <Field
        name={'username'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
    </View>
  )

  _renderPasswordInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Password</Text>
      <Field
        name={'password'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
        secureTextEntry
      />
    </View>
  )
  _renderEmailInput = () => (
    <View style={styles.inputContainerBlock}>
      <Text style={styles.label}>Email</Text>
      <Field
        keyboardType={'email-address'}
        name={'email'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
    </View>
  )
  _renderGGLogo = () => (
    <Image
      resizeMode={'contain'}
      source={images.google}
      style={styles.image}
    />
  )

  _renderFBLogo = () => (
    <Image
      resizeMode={'contain'}
      source={images.facebook}
      style={styles.image}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <Header direction={'horizontal'} />
          {this._renderUserInput()}
          {this._renderPasswordInput()}
          {this._renderEmailInput()}
          <View style={styles.socialLogos}>
            <Text style={styles.logoText}>Or login with: </Text>
            <View style={styles.logos}>
              {this._renderFBLogo()}
              {this._renderGGLogo()}
            </View>
          </View>
          <Text style={styles.para}>
            Disclamer about information... study isetrinisetrin riesnt risetni ienars iaers
            eseiiieeseiiie einriseni reisn rsien Data breach aiers iers iersiers. ires ier ires u
            efir ir. iasrnti irsent Child Mind Institut d recontact?
          </Text>
        </View>
        <SubmitBtn onPress={this._onNext} text={'NEXT'} />
      </View>
    );
  }
}
export default reduxForm({
  form: 'form'
})(RegisterFormContainer);
