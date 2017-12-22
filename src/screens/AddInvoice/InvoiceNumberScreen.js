import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class InvoiceNumberScreen extends Component <{}> {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

        <TouchableOpacity
          style={styles.confirmButtonStyle}
          onPress={() => alert('confirmed!')}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  confirmButtonStyle: {
    backgroundColor: '#efeffa',
    padding: 15,
    elevation: 1,
    borderRadius: 2,
  }
};

export default InvoiceNumberScreen;
