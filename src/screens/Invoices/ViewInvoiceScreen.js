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
      <InvoiceSection sectionType='Date' sectionData={date} />
      <InvoiceSection sectionType='Vendor' sectionData={vendor.name} />
      <InvoiceSection sectionType='Invoice No' sectionData={number} />
      <InvoiceSection getCodeName={getCodeName} sectionType='Line Items' sectionData={items} />
      <InvoiceSection sectionType='Invoice Total' sectionData={'$'+total} />
      <SingleButton
        onPress={() => deleteInvoice(invoice.id, deleteInvoiceCallback)}
        buttonText='Delete'
      />
    </View>
  );
};

export default ViewInvoiceScreen;
