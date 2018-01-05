import React from 'react';
import { View } from 'react-native';

import SingleButton from '../../components/SingleButton';
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
      <SingleButton
        onPress={() => deleteInvoice(invoice.id, deleteInvoiceCallback)}
        buttonText='Delete'
      />
    </View>
  );
};

export default ViewInvoiceScreen;
