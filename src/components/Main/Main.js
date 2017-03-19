'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View>
      	<Navigator
      	  initialRoute={{name: 'Routes', index: 0}}
      	  renderScene={(route, navigator) => {
      	    
      	  }}
      	/>
      	<Text>Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default Main;

