import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const InvoiceItem = ({ invoice, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.invoiceItemStyle}
    >
      <View style={styles.vendorNameContainer}>
        <Text style={styles.vendorNameStyle}>{invoice.vendor.name}</Text>
      </View>
      <View style={styles.invoiceNumberContainer}>
        <Text style={styles.invoiceNumberStyle}>#{invoice.number}</Text>
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
    padding: 6,
  },
  invoiceNumberStyle: {
    fontSize: 20,
  },
  invoiceNumberContainer: {
    padding: 6,
    paddingRight: 14,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  vendorNameContainer: {
    flex: 1
  }
};


export default InvoiceItem;
