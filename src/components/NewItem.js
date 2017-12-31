import React from 'react';
import { View, TextInput } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';

const NewItem = ({
  onChangeAmount,
  onChangeCode,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Autocomplete
        containerStyle={styles.containerStyle}
        onChangeText={onChangeCode}
      />
      <TextInput
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
