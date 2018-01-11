import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import Autocomplete from 'react-native-autocomplete-input';
import Icon from 'react-native-vector-icons/FontAwesome';

const LineItems = ({
  items,
  editItem,
  amount,
  autocompleteData,
  code,
  onChangeAmount,
  onChangeCode,
  onSubmitEditing,
}) => {
  return items.map(item => {

    const codeTextInput = (
      <TextInput
        onChangeText={onChangeCode}
        value={code}
        style={styles.codeTextStyle}
        editable={false}
        onSubmitEditing={onSubmitEditing}
      />
    );

    return (
      <View style={styles.container} key={item.code.name}>
        {/* <View style={styles.codeContainer}>
          <Text style={styles.codeTextStyle}>{item.code.name}</Text>
        </View> */}
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
        {/* <View style={styles.amountContainer}>
          <Text style={styles.amountStyle}>${item.amount}</Text>
        </View> */}
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
        <TouchableOpacity onPress={() => editItem(item)} style={styles.iconContainer}>
          <Icon name='pencil-square-o' size={24} color={'#181'} />
        </TouchableOpacity>
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
  },
  iconContainer: {
    flex: 0.15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 6,
    marginHorizontal: 3,
  }
};

export default LineItems;
