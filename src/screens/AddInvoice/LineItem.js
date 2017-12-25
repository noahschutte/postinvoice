import React from 'react';
import { View, TextInput } from 'react-native';

const LineItem = ({
  onChangeItemCode,
  onChangeItemAmount,
  item,
}) => {
  return (
    <View style={styles.itemsContainer}>
      <TextInput
        style={styles.itemCodeInputStyle}
        value={item.code}
        onChangeText={text => onChangeItemCode(item, text)}
      />
      <TextInput
        style={styles.itemTotalInputStyle}
        keyboardType='numeric'
        value={'$'+item.amount}
        onChangeText={text => onChangeItemAmount(item, text)}
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
