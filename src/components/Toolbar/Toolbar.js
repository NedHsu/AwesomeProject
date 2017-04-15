'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ToolbarAndroid,
} from 'react-native';

class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid
      	  style={styles.toolbar}
	      logo={require('../../../images/icons/mfmoon.png')}
	      title="AwesomeApp"
	      actions={[{title: 'Settings', icon: require('../../../images/icons/menulist.png'), show: 'always'}]}
	      onActionSelected={this.onActionSelected} />
    );
  }
  onActionSelected(position) {
	  
  }
}

const styles = StyleSheet.create({
	toolbar: {
		width: '100%',
		height: 56
	}
});


export default Toolbar;