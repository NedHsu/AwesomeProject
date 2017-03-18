/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component{
  constructor(props) {
      super(props);
      this.state = {showText: true};
      // Toggle the state every second
      setInterval(() => {
        this.setState({ showText: !this.state.showText });
      }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
      return (
        <Text>{display}</Text>
      );
  }
}

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.bigblue}>Hello world!</Text>
        <Blink text='tttt' />
        <View style={{width: '100%', height: 50, backgroundColor: 'powderblue', flex: 1}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue', flex: 2}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue', flex: 3}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
