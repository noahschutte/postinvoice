import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import InvoiceItem from './InvoiceItem';

class InvoiceReviewScreen extends Component <{}> {
  render() {
    const { date, vendor, invoiceNumber, items } = this.props.newInvoice;
    return (
      <View style={{ flex: 1 }}>
        <InvoiceItem itemType='Date' item={date} />
        <InvoiceItem itemType='Vendor' item={vendor} />
        <InvoiceItem itemType='Invoice No' item={invoiceNumber} />
        <InvoiceItem itemType='Line Items' item={items} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{
              backgroundColor: '#efeffa',
              padding: 15,
              elevation: 1,
              borderRadius: 2,
            }}
            onPress={() => alert('invoice confirmed!')}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { newInvoice } = invoicesReducer;
  return { newInvoice };
};

export default connect(mapStateToProps)(InvoiceReviewScreen);
