import React from 'react';
import { View, TextInput } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';

const NewItem = ({
  amount,
  autocompleteData,
  code,
  codes,
  onChangeAmount,
  onChangeCode,
}) => {
  console.log('codes: ', codes);

  return (
    <View style={{ flexDirection: 'row' }}>
      <Autocomplete
        defaultValue={code}
        data={autocompleteData}
        containerStyle={styles.containerStyle}
        onChangeText={onChangeCode}
      />
      <TextInput
        value={amount}
        style={styles.amountInputStyle}
        onChangeText={onChangeAmount}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    borderWidth: 0,
  },
  amountInputStyle: {
    flex: 1,
  }
};

export default NewItem;
