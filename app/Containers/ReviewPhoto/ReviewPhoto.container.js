import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
// import { takeSnapshotAsync } from 'expo';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';

import { photoAdd } from '../../Redux/Reducers/Photo/Photo.reducer';

import images from '../../Resources/Images';
import styles from './ReviewPhoto.container.style';

import { DIRECTION } from '../../Utilities/Constant.utils';
import navProps from '../../PropTypes/Navigation.propTypes';

class ReviewPhotoContainer extends Component {
  _onKeep = () => {
    const { addPhoto, uid, navigation } = this.props;
    const { state: { params: { base64 } } } = navigation;
    const tokenImgUrl = `data:image/jpg;base64,${base64}`;

    addPhoto(uid, { tokenImgUrl }).then(() => navigation.goBack());
  }

  _onCancel = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const { state: { params: { uri } } } = this.props.navigation;

    return (
      <View style={styles._container}>
        <Header direction={DIRECTION.HORIZONTAL} />
        <View style={styles._imgContainer}>
          <Image source={images.coin} resizeMode={'contain'} style={styles._images}>
            <Image source={{ uri }} style={{ width: 100, height: 100 }} />
          </Image>
        </View>
        <View style={styles._btnContainer}>
          <Btn
            btnStyle={styles._btn}
            textStyle={styles._text}
            text={'Keep'} kind={'plain'}
            onPress={this._onKeep}
          />
          <Btn
            btnStyle={styles._btn}
            textStyle={styles._text2}
            text={'Cancel'} kind={'plain'}
            onPress={this._onCancel}
          />
        </View>
      </View>
    );
  }
}

ReviewPhotoContainer.propTypes = {
  ...navProps,
  addPhoto: propTypes.func.isRequired,
  uid: propTypes.string.isRequired
};

const mapStateToProps = ({ user: { uid } }) => ({ uid });
const mapDispatchToProps = {
  addPhoto: photoAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPhotoContainer);
