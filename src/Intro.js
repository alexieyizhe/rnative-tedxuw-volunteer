import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import AppIntro from 'react-native-app-intro';


export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSkipBtnHandle = (index) => {
    console.log('skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    this.props.navigation.navigate('Main');
  }
  nextBtnHandle = (index) => {
    console.log('next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log('changed');
    console.log(index, total);
  }

  render() {
    const pageArray = [{
      title: 'Hey!',
      description: 'Thanks for being a TEDxUW Ambassador. Let\'s walk you through the process of registration on the day of the event.',
      img: require('../assets/egg.png'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Greet',
      description: 'Make sure you stay positive and have a smile on your face. Ask the ...',
      img: require('../assets/egg.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Scan',
      description: 'Make sure you stay positive and have a smile on your face. Ask the ...',
      img: require('../assets/egg.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Give',
      description: 'Make sure you stay positive and have a smile on your face. Ask the ...',
      img: require('../assets/egg.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Ready?',
      description: 'Hit the \'done\' button to continue!',
      img: require('../assets/egg.png'),
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
        showSkipButton={false}
        pageArray={pageArray}
        customStyles={{ btnContainer: {flex: 1} }}
      />
    );
  }
}
