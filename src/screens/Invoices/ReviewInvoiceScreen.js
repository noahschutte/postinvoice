import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { clearNewInvoiceData, postNewInvoice } from '../../actions/invoiceActions';
import InvoiceSection from '../../components/InvoiceSection';
import SingleButton from '../../components/SingleButton';

class ReviewInvoiceScreen extends Component <{}> {
  postNewInvoiceCallback = () => {
    this.props.clearNewInvoiceData();
    this.props.navigator.popToRoot({
      animated: true,
      animationType: 'fade',
    });
  }

  render() {
    const { postNewInvoice, newInvoice } = this.props;
    const { date, vendor, number, items, total } = newInvoice;
    return (
      <View style={{ flex: 1 }}>
        <InvoiceSection itemType='Date' item={date} />
        <InvoiceSection itemType='Vendor' item={vendor.name} />
        <InvoiceSection itemType='Invoice No' item={number} />
        <InvoiceSection itemType='Line Items' item={items} />
        <InvoiceSection itemType='Invoice Total' item={'$'+total} />
        <SingleButton
          onPress={() => postNewInvoice(newInvoice, this.postNewInvoiceCallback)}
          buttonText='Confirm'
        />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { newInvoice, error } = invoicesReducer;
  return { newInvoice, error };
};

export default connect(mapStateToProps, {
  clearNewInvoiceData,
  postNewInvoice
})(ReviewInvoiceScreen);
