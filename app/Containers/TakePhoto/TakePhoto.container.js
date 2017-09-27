import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

import images from '../../Resources/Images';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import styles from './TakePhoto.container.style';

export default class CameraExample extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate('ReviewPhoto');
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>

        <Camera style={styles.cameraContainer} type={this.state.type}>
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
            <FontIcon name={'arrows-cw'} color={'white'} size={30} />

          </TouchableOpacity>
          <View style={styles.ovalContainer}>
            <View style={styles.oval} />
          </View>
          <View
            style={styles.cameraView}
          />

        </Camera>
        <View style={styles.dock}>
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

        </View>
      </View>
    );
  }
}
