import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';

import Autocomplete from 'react-native-autocomplete-input';

const NewItem = ({
  autocompleteData,
  editable,
  editItem,
  index,
  item,
  onChangeAmount,
  onChangeCode,
  onSubmitEditing,
}) => {

  const codeTextInput = (
    <TextInput
      editable={editable()}
      onChangeText={text => onChangeCode(item, index, text)}
      value={item.code.name}
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
        renderItem={name => {
          return (
            <TouchableOpacity
              style={{ margin: 5, borderBottomWidth: 0.5, borderColor: 'rgba(0,0,0,0.1)' }}
              onPress={() => onChangeCode(item, index, name)}
             >
              <Text style={{ fontSize: 18 }}>{name}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <TextInputMask
        value={item.amount || '$0.00'}
        editable={editable()}
        type={'money'}
        options={{
          separator: '.',
          delimiter: ',',
          unit: '$',
        }}
        selectTextOnFocus
        onChangeText={text => onChangeAmount(item, index, text)}
        keyboardType='numeric'
        onSubmitEditing={onSubmitEditing}
        style={styles.amountInputStyle}
      />

      <TouchableOpacity onPress={() => editItem(index)} style={styles.iconContainer}>
        <Icon name='pencil-square-o' size={24} color={'#181'} />
      </TouchableOpacity>

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
  },
  iconContainer: {
    flex: 0.15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 6,
    marginHorizontal: 3,
  }
};

export default NewItem;
