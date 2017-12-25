import React from 'react';
import { View, TextInput } from 'react-native';

const LineItem = ({
  index,
  onChangeItemCode,
  onChangeItemAmount,
  code,
  amount,
}) => {
  return (
    <View style={styles.itemsContainer}>
      <TextInput
        style={styles.itemCodeInputStyle}
        value={code}
        onChangeText={text => onChangeItemCode(index, text)}
      />
      <TextInput
        style={styles.itemTotalInputStyle}
        keyboardType='numeric'
        value={'$'+amount}
        onChangeText={text => onChangeItemAmount(index, text)}
      />
    </View>
  );
};

const styles = {
  itemsContainer: {
    // flex: 2,
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

export default LineItem;
