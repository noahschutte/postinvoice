import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

class SideMenu extends Component <{}> {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            index
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            show
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            create
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    width: Dimensions.get('window').width * 0.66,
    height: Dimensions.get('window').height,
    backgroundColor: '#ddd',
  },
  button: {
    backgroundColor: '#be4',
    margin: 25,
    padding: 25,
  },
};


export default SideMenu;
