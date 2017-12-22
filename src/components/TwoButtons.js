import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TwoButtons = props => {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onLeftPress} style={styles.buttonStyle} >
        <Text style={{ textAlign: 'center', }}>{props.leftText}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onRightPress} style={styles.buttonStyle} >
        <Text style={{ textAlign: 'center', }}>{props.rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    padding: 15,
    justifyContent: 'space-around',
  },
  buttonStyle: {
    minWidth: 75,
    backgroundColor: '#efeffa',
    padding: 15,
    elevation: 1,
    borderRadius: 2
  },
};

export default TwoButtons;
