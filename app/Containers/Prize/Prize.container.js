import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, FieldArray } from 'redux-form';

import FontIcon from '../../Components/FontIcon/FontIcon.component';
import Btn from '../../Components/FormButton/FormButton.component';
import PrizeList from './PrizeList.component';

import images from '../../Resources/Images';
import styles from './Prize.container.style';

import { userUpdateProfile, userInitProfile } from '../../Redux/Reducers/User/User.reducer';

import config from './Prize.container.config';
import { landscapeOnly, portraitOnly } from '../../Utilities/ScreenOrientation.utils';
import { USER_ROLE } from '../../Utilities/Constant.utils';

class PrizeContainer extends Component {
  componentWillMount() {
    landscapeOnly();
  }

  componentWillUnmount() {
    portraitOnly();
  }

  _onAdd = () => {
    const { array } = this.props;
    array.push('prizes', { name: '', amount: 0 });
  }

  _onSubmitSuccess = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  _handleSubmit = ({ prizes }) => {
    const { updateProfile, initProfile, user } = this.props;
    updateProfile({ ...user, prizes })
      .then(({ value }) => initProfile(value))
      .then(this._onSubmitSuccess);
  }

  _renderAddBtn = () => {
    const { isParent } = this.props;
    return isParent && (
      <Btn onPress={this._onAdd} >
        <FontIcon name={'plus'} color={'#f7c34a'} size={40} />
      </Btn>
    );
  }

  _renderSaveBtn = () => {
    const { isParent } = this.props;
    return isParent && (
      <Btn
        btnStyle={styles._btn} textStyle={styles._textBtn}
        text={'SAVE'} onPress={this.props.handleSubmit(this._handleSubmit)}
      />
    );
  }

  render() {
    return (
      <View style={styles._containerContent}>
        <FieldArray component={PrizeList} name={'prizes'} showDelBtn={this.props.isParent} />
        <View style={styles._btnGroup}>
          <Image source={images.pig} resizeMode={'contain'} style={styles._images} />
          {this._renderAddBtn()}
          {this._renderSaveBtn()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isParent: state.user.role === USER_ROLE.PARENT,
  initialValues: {
    prizes: state.user.prizes
  }
});

const mapDispatchToProps = {
  updateProfile: userUpdateProfile,
  initProfile: userInitProfile
};

PrizeContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(PrizeContainer));
