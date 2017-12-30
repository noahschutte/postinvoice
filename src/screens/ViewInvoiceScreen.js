import React from 'react';
import { View } from 'react-native';

import InvoiceItem from './AddInvoice/InvoiceItem';

const ViewInvoiceScreen = ({ invoice }) => {
  const { date, vendor, number, items } = invoice;
  return (
    <View style={{ flex: 1 }}>
      <InvoiceItem itemType='Date' item={date} />
      <InvoiceItem itemType='Vendor' item={vendor.name} />
      <InvoiceItem itemType='Invoice No' item={number} />
      <InvoiceItem itemType='Line Items' item={items} />
    </View>
  );
};

export default ViewInvoiceScreen;
