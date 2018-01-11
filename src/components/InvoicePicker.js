import React from 'react';
import { View, Text, Picker } from 'react-native';

const InvoicePicker = ({
  label,
  options,
  selectedValue,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>

      <View style={styles.labelContainer}>
        <Text style={styles.labelStyle}>{label}:</Text>
      </View>

      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        >
          {
            options.map(option => {
              return (
                <Picker.Item key={option} label={option+''} value={option} />
              );
            })
          }
        </Picker>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  labelContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  picker: {
    flex: 3,
    marginHorizontal: 30,
    backgroundColor: '#eee',
    color: '#000',
    marginEnd: 75,
    alignSelf: 'center',
    elevation: 1,
  },
};

export default InvoicePicker;
