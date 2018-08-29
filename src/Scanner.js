import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button, TouchableOpacity, StatusBar, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class Scanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    const needsTutorial = true;

    if (needsTutorial) {
      this.props.navigation.navigate('Intro');
    }
  }

  onSuccess(e) {
    // open checkin modal here
    Alert.alert(`Scannd: ${e.data}`)
  };

  onPress(buttonType) {
    switch(buttonType) {
      case 'login':
        Alert.alert('Pressed login');
        break;
      case 'changeEvent':
        Alert.alert('Currently scanning for Registration');
        break;
      case 'help':
        this.props.navigation.navigate('Intro');
        break;
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <QRCodeScanner
          onRead={(e) => this.onSuccess}
          cameraStyle={styles.scannerView}
          showMarker={true}
        />
        <View style={{height: '5%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => this.onPress('login')}><Text style={styles.startText}>S</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPress('changeEvent')}><Text style={styles.centerText}>R</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPress('help')}><Text style={styles.endText}>H</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scannerView: {
    height: '100%',
  },
  startText: {
    fontSize: 18,
    color: '#777',
  },
  centerText: {
    fontSize: 18,
    color: '#777',
  },
  endText: {
    fontSize: 18,
    color: '#777',
  },
  reticle: {
    width: 100,
    height: 100,
    color: 'red',
    opacity: 0.4,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
