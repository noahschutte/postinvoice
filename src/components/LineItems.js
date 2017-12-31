import React from 'react';
import { View, Text, } from 'react-native';

const LineItems = ({ items }) => {
  return items.map(item => {
    console.log('item: ', item);
    return (
      <View style={styles.container} key={item.id}>
        <View style={styles.codeContainer}>
          <Text style={styles.codeTextStyle}>{item.code.name}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountStyle}>${item.amount}</Text>
        </View>
      </View>
    );
  });
};

const styles = {
  container: {
    flexDirection: 'row',
  },
  codeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeTextStyle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  amountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountStyle: {
    fontSize: 26,
  }
};

export default LineItems;
