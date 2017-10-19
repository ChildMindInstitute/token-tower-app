import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import PhotoGrid from 'react-native-photo-grid';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import { photoRemove, photoInit } from '../../Redux/Reducers/Photo/Photo.reducer';
import styles from './PhotosList.container.styles';

import { DIRECTION, MSG, COMMON } from '../../Utilities/Constant.utils';

class PhotosListContainer extends Component {
  _renderHeader = () => (
    <Text style={styles._text}>Tap to delete photos!</Text>
  );

  _deletePhoto = ({ photoId }) => {
    const { user: { uid }, removePhoto, initPhoto } = this.props;
    removePhoto(uid, photoId).then(() => initPhoto(uid));
  }

  _onPhotoPress = (item) => {
    Alert.alert(
      MSG.REMOVE_TOKEN_TITLELE,
      MSG.DEL_PHOTO_CONFIRM,
      [
        { text: COMMON.CANCEL, style: 'cancel' },
        {
          text: COMMON.OK,
          onPress: () => {
            this._deletePhoto(item);
          }
        }
      ],
      { cancelable: false }
    );
  }

  _renderItem = (item, itemSize) => {
    const onPress = () => {
      this._onPhotoPress(item);
    };

    return (
      <Btn
        key={item.photoId} onPress={onPress}
        btnStyle={{ width: itemSize, height: itemSize }}
      >
        <Image
          resizeMode="contain"
          style={{ flex: 1 }}
          source={{ uri: item.src }}
        />
      </Btn>
    );
  }

  render() {
    const { photoList } = this.props;
    const imgKeylist = Object.keys(photoList);
    const data = imgKeylist.map(key => (
      { photoId: key, src: photoList[key].tokenImgUrl }
    ));

    if (imgKeylist.length < 1) {
      return (
        <View style={styles._emptyContainer}>
          <Text style={styles._emptyText}>{'You don\'t have any photo.'}</Text>
          <View style={styles._emptyIconContainer}>
            <FontIcon name={'picture'} color="white" />
          </View>
        </View>
      );
    }

    return (
      <View style={styles._container}>
        <View style={styles._header}>
          <Header direction={DIRECTION.HORIZONTAL} />
        </View>
        <PhotoGrid
          data={data}
          itemsPerRow={3}
          itemMargin={1}
          renderHeader={this._renderHeader}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  photoList: state.photo
});

const mapDispatchToProps = {
  removePhoto: photoRemove,
  initPhoto: photoInit
};

PhotosListContainer.propTypes = {
  user: propTypes.object,
  photoList: propTypes.any,
  removePhoto: propTypes.func,
  initPhoto: propTypes.func
};

PhotosListContainer.defaultProps = {
  photoList: []
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosListContainer);
