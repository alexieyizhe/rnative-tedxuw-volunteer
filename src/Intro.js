import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'react-native-app-intro';


export default class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>The following Firebase modules are pre-installed:</Text>
        {firebase.admob.nativeModuleExists && <Text>admob()</Text>}
        {firebase.analytics.nativeModuleExists && <Text>analytics()</Text>}
        {firebase.auth.nativeModuleExists && <Text>auth()</Text>}
        {firebase.config.nativeModuleExists && <Text>config()</Text>}
        {firebase.crashlytics.nativeModuleExists && <Text>crashlytics()</Text>}
        {firebase.database.nativeModuleExists && <Text>database()</Text>}
        {firebase.firestore.nativeModuleExists && <Text>firestore()</Text>}
        {firebase.functions.nativeModuleExists && <Text>functions()</Text>}
        {firebase.iid.nativeModuleExists && <Text>iid()</Text>}
        {firebase.invites.nativeModuleExists && <Text>invites()</Text>}
        {firebase.links.nativeModuleExists && <Text>links()</Text>}
        {firebase.messaging.nativeModuleExists && <Text>messaging()</Text>}
        {firebase.notifications.nativeModuleExists && <Text>notifications()</Text>}
        {firebase.perf.nativeModuleExists && <Text>perf()</Text>}
        {firebase.storage.nativeModuleExists && <Text>storage()</Text>}
        <Button
          title="Go to Scanner"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
