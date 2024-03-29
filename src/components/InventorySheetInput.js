import React from 'react';
import { View, Text } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

const InventorySheetInput = ({ amount, onChangeAmount, type }) => {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{type}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInputMask
          value={amount || '$0.00'}
          type={'money'}
          options={{
            separator: '.',
            delimiter: ',',
            unit: '$',
          }}
          onChangeText={amount => onChangeAmount(amount, type)}
          keyboardType='numeric'
          style={styles.inputStyle}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 28,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 26,
  },
};

export default InventorySheetInput;
