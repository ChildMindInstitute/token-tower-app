import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import PhotoGrid from 'react-native-photo-grid';

import Header from '../../Components/TokenTowerHeader/TokenTowerHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import { photoRemove } from '../../Redux/Reducers/Photo/Photo.reducer';
import { tokenStackUpdate, tokenStackInit } from '../../Redux/Reducers/TokenStack/TokenStack.reducer';
import styles from './PhotosList.container.styles';

import { DIRECTION, MSG, COMMON } from '../../Utilities/Constant.utils';
import { getAllPhotos } from '../../Utilities/Photos.utils';

class PhotosListContainer extends Component {
  state = { data: [] }

  componentDidMount() {
    this._getPhotos();
  }

  _getPhotos = () => {
    getAllPhotos((data) => {
      this.setState({ data });
    });
  }

  _renderHeader = () => (
    <Text style={styles._text}>Tap to delete photos!</Text>
  );

  _deletePhoto = ({ id }) => {
    const { user: { uid }, tokenStack, removePhoto, updateStack, initStack } = this.props;
    const { data } = this.state;
    const { tokens } = tokenStack;

    const photoIdList = data.map(i => i.id);
    photoIdList.splice(photoIdList.indexOf(id), 1);

    const newTokens = tokens.map((token) => {
      let newToken = token;
      if (token === id) newToken = photoIdList[Math.floor(Math.random() * photoIdList.length)] || '';
      return newToken;
    });
    updateStack(uid, { ...tokenStack, tokens: newTokens }).then(() => initStack(uid));
    removePhoto(uid, id).then(this._getPhotos);
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
        key={item.id} onPress={onPress}
        btnStyle={{ width: itemSize, height: itemSize }}
      >
        <Image
          resizeMode="contain"
          style={{ flex: 1 }}
          source={{ uri: item.base64 }}
        />
      </Btn>
    );
  }

  render() {
    if (this.state.data.length < 1) {
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
          data={this.state.data}
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
  tokenStack: state.tokenStack
});

const mapDispatchToProps = {
  removePhoto: photoRemove,
  updateStack: tokenStackUpdate,
  initStack: tokenStackInit
};

PhotosListContainer.propTypes = {
  user: propTypes.object,
  tokenStack: propTypes.object,
  removePhoto: propTypes.func,
  updateStack: propTypes.func,
  initStack: propTypes.func
};

PhotosListContainer.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosListContainer);
