import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import images from '../../Resources/Images';

import styles from './Register.container.styles';

export default class RegisterFormContainer extends Component {
    _onNext = () => {
      const { navigate } = this.props.navigation;
      navigate('RegisterWelcome');
    }

    _renderUserInput = () => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>User</Text>
        <TextInput style={styles.input} />
      </View>
    )

    _renderPasswordInput = () => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry style={styles.input} />
      </View>
    )
    _renderEmailInput = () => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput keyboardType={'email-address'} style={styles.input} />
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
        <View>
          <Header direction={'horizontal'} />
          <View style={styles.viewInput}>
            {this._renderUserInput()}
            {this._renderPasswordInput()}
            {this._renderEmailInput()}
          </View>
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
          <TouchableOpacity onPress={this._onNext} >
            <Text style={{ textAlign: 'right' , marginRight: 10 }}> Next</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
