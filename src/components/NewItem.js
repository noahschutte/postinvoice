import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';

const NewItem = ({
  amount,
  autocompleteData,
  code,
  onChangeAmount,
  onChangeCode,
}) => {

  const codeTextInput = (
    <TextInput
      onChangeText={onChangeCode}
      value={code}
    />
  );
  return (
    <View style={{ flexDirection: 'row' }}>
      <Autocomplete
        data={autocompleteData}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        renderTextInput={() => codeTextInput}
        renderItem={item => {
          return (
            <TouchableOpacity onPress={() => onChangeCode(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TextInput
        value={amount}
        style={styles.amountInputStyle}
        onChangeText={onChangeAmount}
        keyboardType='numeric'
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
  },
  amountInputStyle: {
    flex: 1,
  },
  inputContainerStyle: {
    borderWidth: 0,
  }
};

export default NewItem;
