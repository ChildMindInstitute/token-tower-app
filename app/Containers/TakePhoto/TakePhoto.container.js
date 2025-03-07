import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';
import { connect } from 'react-redux';

import PermissionGrantWidget from '../../Components/PermissionGrantWidget/PermissionGrantWidget.component';
import Btn from '../../Components/FormButton/FormButton.component';

import images from '../../Resources/Images';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import styles from './TakePhoto.container.style';

import { loadingMaskStart, loadingMaskEnd } from '../../Redux/Reducers/LoadingMask/LoadingMask.reducer';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './TakePhoto.container.config';

class TakePhotoContainer extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _onFlip = () => {
    let { type } = this.state;
    type = type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back;
    this.setState({ type });
  }

  _onCamera = async () => {
    const { props: { startLoading, endLoading, navigation: { navigate } }, camera } = this;

    if (!camera) return;
    startLoading();
    const photo = await camera.takePictureAsync();
    navigate(routeName.TokenTower.ReviewPhoto, photo);
    endLoading();
  }

  _onPick = async () => {
    const { navigation: { navigate } } = this.props;

    const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!cancelled) {
      navigate(routeName.TokenTower.ReviewPhoto, { uri, isFromLibrary: true });
    }
  };

  _getCameraRef = (ref) => { this.camera = ref; };

  render() {
    const { hasCameraPermission, type } = this.state;
    if (!hasCameraPermission) return <PermissionGrantWidget />;

    return (
      <Image style={styles._backgroundContainer} source={images.firstbackground}>
        <View style={styles._container}>
          <Camera style={styles._cameraContainer} type={type} autoFocus ref={this._getCameraRef}>
            <Image source={images.coin} resizeMode={'contain'} style={styles._coin} />
          </Camera>
          <View style={styles._dock}>
            <Btn btnStyle={styles._flip} onPress={this._onFlip}>
              <FontIcon
                name={'arrows-cw'}
                color={'#51555b'} size={40}
                style={styles._backgroundTransparent}
              />
            </Btn>
            <Btn btnStyle={styles._cameraLogo} onPress={this._onCamera}>
              <Image source={images.camera} resizeMode={'contain'} style={styles._images} />
            </Btn>
            <Btn btnStyle={styles._logoPickImg} onPress={this._onPick}>
              <FontIcon
                size={40} color={'#51555b'}
                name={'clone'}
                style={styles._backgroundTransparent}
              />
            </Btn>
          </View>
        </View>
      </Image>
    );
  }
}

TakePhotoContainer.propTypes = config.propTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  startLoading: loadingMaskStart,
  endLoading: loadingMaskEnd
};

export default connect(mapStateToProps, mapDispatchToProps)(TakePhotoContainer);
