import React from 'react';
import { View } from 'react-native';

import InvoiceItem from './AddInvoice/InvoiceItem';

const ViewInvoiceScreen = ({ invoice, getCodeName }) => {
  const { date, vendor, number, items, total } = invoice;
  getCodeName(items[0].id);
  return (
    <View style={{ flex: 1 }}>
      <InvoiceItem itemType='Date' item={date} />
      <InvoiceItem itemType='Vendor' item={vendor.name} />
      <InvoiceItem itemType='Invoice No' item={number} />
      <InvoiceItem getCodeName={getCodeName} itemType='Line Items' item={items} />
      <InvoiceItem itemType='Invoice Total' item={'$'+total} />
    </View>
  );
};

export default ViewInvoiceScreen;
