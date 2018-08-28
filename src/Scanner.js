import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Scanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>This is the scanner:</Text>
        <Button
          title="Go to Intro"
          onPress={() => this.props.navigation.navigate('Intro')}
        />
      </View>
    );
  }
}
