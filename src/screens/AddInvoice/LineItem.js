import React from 'react';
import { View, TextInput, Text } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';

const LineItem = ({
  data,
  onChangeItemCode,
  onChangeItemAmount,
  item,
}) => {


  return (
    <View style={styles.itemsContainer}>
      <Autocomplete
        data={data}
        containerStyle={{ flex: 3 }}
        // onChangeText={onChangeItemCode}
        placeholder='Search Codes'
        renderTextInput={() => {
          return (
            <TextInput
              onChangeText={onChangeItemCode}
            />
          );
        }}
        renderItem={item => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
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
