import React from 'react';
import { View, Text } from 'react-native';

const InvoiceItem = ({ item }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', }}>
      <View style={{ flex: 1 }}>
        <Text>{item.date}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{item.invoiceNumber}</Text>
      </View>
    </View>
  );
};

export default InvoiceItem;
