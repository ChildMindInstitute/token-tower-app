import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PhotoGrid from 'react-native-photo-grid';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Btn from '../../Components/FormButton/FormButton.component';

import styles from './PhotosList.container.styles';

import { DIRECTION } from '../../Utilities/Constant.utils';

class PhotosListContainer extends Component {
  _renderHeader = () => (
    <Text>Please select your photos to delete!</Text>
  );

  _onPhotoPress = () => {

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
          source={{ uri: item.src }}
        />
      </Btn>
    );
  }

  render() {
    const { photoList } = this.props;
    const imgKeylist = Object.keys(photoList);
    const data = imgKeylist.map(key => (
      { id: key, src: photoList[key].tokenImgUrl }
    ));

    return (
      <View style={styles._container}>
        <Header direction={DIRECTION.HORIZONTAL} />
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
};

PhotosListContainer.propTypes = {
  photoList: propTypes.arrayOf(propTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosListContainer);
