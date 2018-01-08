import React from 'react';
import { View, Text } from 'react-native';

const InventoryReviewSection = ({ type, amount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.typeWrapper}>
        <Text style={styles.textStyle}>{type}</Text>
      </View>
      <View style={styles.amountWrapper}>
        <Text style={styles.textStyle}>
          {amount.substring(0,1) === '$' ? amount : '$' + amount}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  typeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 26,
  }
};

export default InventoryReviewSection;
