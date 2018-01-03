import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import InvoiceSection from '../../components/InvoiceSection';

const ViewInvoiceScreen = ({
  invoice,
  deleteInvoice,
  deleteInvoiceCallback,
  getCodeName
}) => {
  const { date, vendor, number, items, total } = invoice;
  return (
    <View style={{ flex: 1 }}>
      <InvoiceSection itemType='Date' item={date} />
      <InvoiceSection itemType='Vendor' item={vendor.name} />
      <InvoiceSection itemType='Invoice No' item={number} />
      <InvoiceSection getCodeName={getCodeName} itemType='Line Items' item={items} />
      <InvoiceSection itemType='Invoice Total' item={'$'+total} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{
            backgroundColor: '#efeffa',
            padding: 15,
            elevation: 1,
            borderRadius: 2,
          }}
          onPress={() => deleteInvoice(invoice.id, deleteInvoiceCallback)}
          // onPress={() => alert(invoice.id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewInvoiceScreen;
