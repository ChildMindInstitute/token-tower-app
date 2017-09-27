import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

import Main from '../../Components/Main/Main.component';

import styles from './Tutorial.container.styles';

class TutorialContainer extends Component {
  constructor() {
    super();
    this.state = { step: 0 };
  }

  _onPress = () => {
    if (this.state.step === 3) {
      const { navigate } = this.props.navigation;
      navigate('Splash');
    } else {
      this.setState({ step: this.state.step + 1 });
    }
  }

  _renderStep1 = () => (
    <View style={styles._bubble}>
      <Text style={styles._text1}>Take PHOTOS to decorate your tokens!</Text>
    </View>
  )

  _renderStep2 = () => (
    <View style={styles._bubble}>
      <Text style={styles._text2}>View your TOKENS!</Text>
    </View>
  )

  _renderStep3 = () => (
    <View style={styles._bubble}>
      <Text style={styles._text2}>View your PRIZES!</Text>
    </View>
  )

  _renderStep4 = () => (
    <View style={styles._bubble}>
      <Text style={styles._text3}>Remove/add tokenstokens by tapping on the minus/plus symbol.</Text>
    </View>
  )
  _renderTutorialByStep = (step) => {
    switch (step) {
      case 0: return this._renderStep1();
      case 1: return this._renderStep2();
      case 2: return this._renderStep3();
      case 3: return this._renderStep4();
      default:
        return undefined;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onPress}>
        <View style={styles._container}>
          <View style={styles._tutorialContainer}>
            {this._renderTutorialByStep(this.state.step)}
          </View>
          <Main containerStyle={styles._main} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default TutorialContainer;
