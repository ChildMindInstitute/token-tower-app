import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import images from '../../Resources/Images';
import Input from '../../Components/FormInput/FormInput.component';
import { landscapeOnly, portraitOnly } from '../../Utilities/ScreenOrientation.utils';

import styles from './Prize.container.style';

class PrizeContainer extends Component {
  componentWillMount() {
    landscapeOnly();
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    portraitOnly();
  }

  _renderPrize = () => (
    <View style={styles.inputBlock}>
      <Field
        name={'tokens'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.img}
      />
      <Text style={styles.text}>tokens until: </Text>
      <Field
        name={'prize'}
        component={Input}
        inputStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
    </View>
  );

  _renderPresent = () => (
    <Image
      resizeMode={'contain'}
      source={images.present}
      style={styles.img}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBlock}>
          {this._renderPresent()}
          {this._renderPrize()}
        </View>
        <View style={styles.containerBlock}>
          {this._renderPresent()}
          {this._renderPrize()}
        </View>
        <View style={styles.containerBlock}>
          {this._renderPresent()}
          {this._renderPrize()}
        </View>
      </View>

    );
  }
}
export default reduxForm({
  form: 'prizeForm'
})(PrizeContainer);
