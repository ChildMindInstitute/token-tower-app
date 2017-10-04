import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';

import images from '../../Resources/Images';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import styles from './TakePhoto.container.style';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import { DIRECTION } from '../../Utilities/Constant.utils';

export default class CameraExample extends Component {
  state = {
    image: null,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.TokenTotem.ReviewPhoto);
  }

  _onPick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <Header direction={DIRECTION.HORIZONTAL} />
        <View style={styles.imgContainer}>
          <Image resizeMode={'contain'} source={images.pig} style={styles.images} />
        </View>

        <Camera style={styles.cameraContainer} type={this.state.type}>
          <View style={styles.cameraView}>
            <View style={styles.ovalContainer}>
              <View style={styles.oval} />
            </View>
          </View>
          <View style={styles.blank} />
        </Camera>

        <View style={styles.dock}>
          <TouchableOpacity
            style={styles.flip}
            onPress={() => {
              this.setState({
                type: this.state.type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              });
            }}
          >
            <FontIcon name={'arrows-cw'} color={'#51555b'} size={40} />

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cameraLogo}
            onPress={() => {
              this.setState({
                type: this.state.type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              });
            }}
          >
            <Image source={images.camera} resizeMode={'contain'} style={styles.images} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPick} style={styles.logoPickImg}>
            <FontIcon name={'clone'} color={'#51555b'} size={40} />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
