import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
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
    <View style={styles._inputBlock}>
      <Field
        name={'tokens'}
        component={Input}
        inputStyle={styles._input}
        containerStyle={styles._token}
      />
      <Text style={styles._text}>tokens until: </Text>
      <Field
        name={'prize'}
        component={Input}
        inputStyle={styles._input}
        containerStyle={styles._inputContainer}
      />
    </View>
  );

  _renderPresent = () => (
    <Image
      resizeMode={'contain'}
      source={images.present}
      style={styles._img}
    />
  )


  render() {
    return (
      <View style={styles._container}>
        <View style={styles._containerBlock}>
          {this._renderPresent()}
          {this._renderPrize()}
          <TouchableOpacity onPress={this._onAdd} style={styles._btn} >
            <Text style={styles._textBtn}>+ ADD</Text>
            {this._renderAdd()}
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
export default reduxForm({
  form: 'prizeForm'
})(PrizeContainer);
