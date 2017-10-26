import React from 'react';
import { Field } from 'redux-form';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import FontIcon from '../../Components/FontIcon/FontIcon.component';
import Input from '../../Components/FormInput/FormInput.component';
import Btn from '../../Components/FormButton/FormButton.component';

import styles from './Prize.container.style';

import formPropTypes from '../../PropTypes/Form.propTypes';
import { strToNumber, toString } from '../../Utilities/Format.utils';
import { required, greaterThanZero, smallerThanAThousand } from '../../Utilities/Validation.utils';

const PrizeList = ({ fields, showDelBtn }) => {
  const _renderRow = (member, index, fieldsArr) => {
    const _onDelete = () => fieldsArr.remove(index);

    return (
      <View style={styles._containerBlock} key={index}>
        <View style={styles._inputBlock}>
          <Field
            name={`${member}.amount`} component={Input}
            inputStyle={styles._input} containerStyle={styles._token}
            parse={strToNumber} format={toString}
            validate={[greaterThanZero, smallerThanAThousand]} keyboardType={'numeric'}
            editable={showDelBtn}
          />
          <Text style={styles._text}>tokens:</Text>
          <Field
            name={`${member}.name`} component={Input}
            inputStyle={styles._input} containerStyle={styles._inputContainer}
            validate={required} editable={showDelBtn}
          />
          {showDelBtn && <Btn onPress={_onDelete}>
            <FontIcon name={'minus'} color={'#f7c34a'} size={40} />
          </Btn>}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles._container}>
      {fields.map(_renderRow)}
    </ScrollView>
  );
};

PrizeList.propTypes = {
  ...formPropTypes,
  showDelBtn: PropTypes.bool
};

export default PrizeList;
