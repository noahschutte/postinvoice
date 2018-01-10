import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import Autocomplete from 'react-native-autocomplete-input';

const NewItem = ({
  amount,
  autocompleteData,
  code,
  onChangeAmount,
  onChangeCode,
  onSubmitEditing,
}) => {

  const codeTextInput = (
    <TextInput
      onChangeText={onChangeCode}
      value={code}
      style={styles.codeTextStyle}
      onSubmitEditing={onSubmitEditing}
    />
  );
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', flex: 1 }}>
      <Autocomplete
        data={autocompleteData}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        renderTextInput={() => codeTextInput}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={{ margin: 5, borderBottomWidth: 0.5, borderColor: 'rgba(0,0,0,0.1)' }}
              onPress={() => onChangeCode(item)}
             >
              <Text style={{ fontSize: 18 }}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TextInputMask
        value={amount || '$0.00'}
        type={'money'}
        options={{
          separator: '.',
          delimiter: ',',
          unit: '$',
        }}
        selectTextOnFocus
        onChangeText={onChangeAmount}
        keyboardType='numeric'
        onSubmitEditing={onSubmitEditing}
        style={styles.amountInputStyle}
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
    fontSize: 26,
    textAlign: 'right',
  },
  inputContainerStyle: {
    borderWidth: 0,
  },
  codeTextStyle: {
    fontSize: 26,
  }
};

export default NewItem;
