import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Intro from './Intro.js';
import Scanner from './Scanner.js';
import firebase from 'react-native-firebase';

const MainApp = StackNavigator({
  Main: {
    screen: Scanner
  },
  Intro: {
    screen: Intro
  }
}, {
  headerMode: 'none',
});


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MainApp />
      </View>
    );
  }
};
