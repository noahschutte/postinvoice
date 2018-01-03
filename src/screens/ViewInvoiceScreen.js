import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import InvoiceItem from './AddInvoice/InvoiceItem';

const ViewInvoiceScreen = ({ invoice, deleteInvoice, getCodeName }) => {
  const { date, vendor, number, items, total } = invoice;
  return (
    <View style={{ flex: 1 }}>
      <InvoiceItem itemType='Date' item={date} />
      <InvoiceItem itemType='Vendor' item={vendor.name} />
      <InvoiceItem itemType='Invoice No' item={number} />
      <InvoiceItem getCodeName={getCodeName} itemType='Line Items' item={items} />
      <InvoiceItem itemType='Invoice Total' item={'$'+total} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{
            backgroundColor: '#efeffa',
            padding: 15,
            elevation: 1,
            borderRadius: 2,
          }}
          onPress={() => deleteInvoice(invoice.id)}
          // onPress={() => alert(invoice.id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewInvoiceScreen;
