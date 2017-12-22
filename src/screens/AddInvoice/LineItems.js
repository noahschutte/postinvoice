import React from 'react';
import { View, TextInput } from 'react-native';

const LineItems = props => {
  return (
    <View style={styles.itemsContainer}>
      <TextInput
        style={styles.itemCodeInputStyle}
        value={props.item.code}
      />
      <TextInput
        style={styles.itemTotalInputStyle}
        keyboardType='numeric'
        value={'$'+props.item.amount}
      />
    </View>
  );
};

const styles = {
  itemsContainer: {
    flex: 2,
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemCodeInputStyle: {
    flex: 5,
    margin: 3,
    fontSize: 26,
  },
  itemTotalInputStyle: {
    flex: 2,
    margin: 3,
    textAlign: 'right',
    fontSize: 24
  },
};

export default LineItems;
