import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const InvoiceItem = ({ invoice, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.invoiceItemStyle}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.vendorNameStyle}>{invoice.vendor.name}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{invoice.number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  invoiceItemStyle: {
    flexDirection: 'row',
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  vendorNameStyle: {
    fontSize: 26,
  },
};


export default InvoiceItem;
