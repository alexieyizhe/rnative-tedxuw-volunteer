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

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/headphone-icon.png',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/headphone-icon.png',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}
