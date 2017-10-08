import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import FontIcon from '../../Components/FontIcon/FontIcon.component';
import Input from '../../Components/FormInput/FormInput.component';
import Btn from '../../Components/FormButton/FormButton.component';

import images from '../../Resources/Images';
import styles from './Prize.container.style';

import { landscapeOnly, portraitOnly } from '../../Utilities/ScreenOrientation.utils';

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
        keyboardType={'numeric'}
      />
      <Text style={styles._text}>tokens until: </Text>
      <Field
        name={`prize_${index}`}
        component={Input}
        inputStyle={styles._input}
        containerStyle={styles._inputContainer}
      />
      <Btn onPress={this._onDelete}>
        <FontIcon name={'minus'} color={'#f7c34a'} size={40} />
      </Btn>
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

  _onDelete = (index) => {
    this.state.prizeList.splice(index, 1);
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
          <Btn onPress={this._onAdd} >
            <FontIcon name={'plus'} color={'#f7c34a'} size={40} />
          </Btn>
          <Btn btnStyle={styles._btn} textStyle={styles._textBtn} text={'SAVE'} />
        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: 'prizeForm'
})(PrizeContainer);
