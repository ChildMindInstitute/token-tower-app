import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TutorialContainer extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TutorialContainer</Text>
      </View>
    );
  }
}

export default TutorialContainer;
