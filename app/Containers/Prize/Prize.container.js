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
import { USER_ROLE, ERR_MSG } from '../../Utilities/Constant.utils';
import { showTopErrNotification } from '../../Utilities/Form.util';

class PrizeContainer extends Component {
  _onAdd = () => {
    const { array } = this.props;
    array.push('prizes', { name: '', amount: 0 });
  }

  _onSubmitSuccess = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  _onFail = ({ message }) => {
    showTopErrNotification({
      title: ERR_MSG.CREATE_PRIZE_FAIL_TITLE, message
    }, this.props.dispatch);
  }

  _handleSubmit = ({ prizes }) => {
    const { updateProfile, initProfile, user } = this.props;

    if (prizes == null || prizes.length < 1) this._onFail({ message: ERR_MSG.PRIZE_EMPTY });
    else if (prizes.length > 3) this._onFail({ message: ERR_MSG.MAX_PRIZE });
    else if (prizes.find(p => p.amount <= user.initialToken)) {
      this._onFail({ message: `${ERR_MSG.PRIZE_SHOULD_GREATER_THAN_ALLOCATED} ${user.replenishTokenType}.` });
    } else {
      updateProfile({ ...user, prizes: prizes.sort((a, b) => a.amount - b.amount) })
        .then(({ value }) => initProfile(value))
        .then(this._onSubmitSuccess)
        .catch(this._onFail);
    }
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

const mapStateToProps = ({ user }) => ({
  user,
  isParent: !user.role || user.role === USER_ROLE.PARENT,
  initialValues: {
    prizes: user.prizes
  }
});

const mapDispatchToProps = {
  updateProfile: userUpdateProfile,
  initProfile: userInitProfile
};

PrizeContainer.propTypes = config.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(PrizeContainer));
