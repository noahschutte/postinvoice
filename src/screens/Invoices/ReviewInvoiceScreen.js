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

  formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = d.getUTCFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
  }

  formatAmount = (amount) => {
    return amount.substring(0,1) === '$' ? amount.slice(1) : amount;
  }

  formatLineItems = (items) => {
    const [last] = items.slice(-1);
    if (last.code.name === '' || last.amount === '') items.pop();
    return [
      ...items.map(item => {
        return ({
          ...item,
          amount: this.formatAmount(item.amount),
        });
      })
    ];
  }

  render() {
    const { postNewInvoice, newInvoice } = this.props;
    console.log('newInvoice: ', newInvoice);
    const { date, vendor, number, items, total } = newInvoice;
    console.log('test: ', this.formatLineItems(items));
    return (
      <View style={{ flex: 1 }}>
        <InvoiceSection sectionType='Date' sectionData={this.formatDate(date)} />
        <InvoiceSection sectionType='Vendor' sectionData={vendor.name} />
        <InvoiceSection sectionType='Invoice No' sectionData={number} />
        <InvoiceSection sectionType='Line Items' sectionData={items} />
        <InvoiceSection sectionType='Invoice Total' sectionData={'$'+total} />
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
