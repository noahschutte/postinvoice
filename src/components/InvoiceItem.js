import React from 'react';
import { View, Text } from 'react-native';

const InvoiceItem = ({ invoice }) => {
  console.log('invoice: ', invoice);
  return (
    <View style={{ flex: 1, flexDirection: 'row', }}>
      <View style={{ flex: 1 }}>
        <Text>{invoice.vendor.name}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{invoice.number}</Text>
      </View>
    </View>
  );
};

export default InvoiceItem;
