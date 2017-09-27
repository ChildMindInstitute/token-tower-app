import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import images from '../../Resources/Images';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import Input from '../../Components/FormInput/FormInput.component';
import { landscapeOnly, portraitOnly } from '../../Utilities/ScreenOrientation.utils';

import styles from './Prize.container.style';

class PrizeContainer extends Component {
  constructor() {
    super();
    this.state = {
      prizeList: [
        {
          tokenPoint: 0,
          prize: ''
        }
      ]
    };
  }
  componentWillMount() {
    landscapeOnly();
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    portraitOnly();
  }

  _renderPrize = (item, index) => (
    <View style={styles._inputBlock}>
      <Field
        name={`tokens_${index}`}
        component={Input}
        inputStyle={styles._input}
        containerStyle={styles._token}
      />
      <Text style={styles._text}>tokens until: </Text>
      <Field
        name={`prize_${index}`}
        component={Input}
        inputStyle={styles._input}
        containerStyle={styles._inputContainer}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <FontIcon name={'minus'} color={'#f7c34a'} size={40} />
      </TouchableOpacity>
    </View>
  );

  _renderPresent = () => (
    <Image
      resizeMode={'contain'}
      source={images.present}
      style={styles._img}
    />
  )

  _renderRow = () => (
    this.state.prizeList.map((item, index) => (
      <View style={styles._containerBlock} key={index}>
        {this._renderPresent()}
        {this._renderPrize(item, index)}
      </View>
    ))
  )

  _onAdd = () => {
    this.state.prizeList.push({
      tokenPoint: 0,
      prize: ''
    });
    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles._containerContent}>
        <ScrollView style={styles._container}>
          {this._renderRow()}
        </ScrollView>
        <View style={styles._btnGroup}>
          <Image source={images.pig} resizeMode={'contain'} style={styles._images} />
          <TouchableOpacity onPress={this._onAdd} style={styles.iconContainer} >
            <FontIcon name={'plus'} color={'#f7c34a'} size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._btn} >
            <Text style={styles._textBtn}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
export default reduxForm({
  form: 'prizeForm'
})(PrizeContainer);
