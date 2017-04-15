'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

import Toolbar from '../Toolbar';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar></Toolbar>
      	<Navigator style={styles.navigator}
      	  initialRoute={{name: 'Routes', index: 0}}
      	  renderScene={(route, navigator) => {
      	    <Text style={styles.link}>
      	      Routes
      	    </Text>
      	  }}
      	/>
      	<Text>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: '100%'
  },
	link: {

	},
	navigator: {
		height: 100,
		width: '100%',
		backgroundColor: 'powderblue'
	}
});


export default Main;

