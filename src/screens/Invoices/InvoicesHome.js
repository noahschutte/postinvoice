import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';

import {
  createNewInvoiceBegin,
  deleteInvoice,
  fetchInvoices
} from '../../actions/invoiceActions';

import InvoiceItem from '../../components/InvoiceItem';

class InvoicesHome extends Component <{}> {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.props.fetchInvoices();
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'add') {
        this.props.navigator.push({
          screen: 'postinvoice.SelectDateScreen',
          title: 'Select Date',
          navigatorStyle: {
            navBarTitleTextCentered: true,
          },
          passProps: {
            intent: 'postinvoice.SelectVendorScreen',
            intentTitle: 'Select Vendor',
          },
          navigatorButtons: {
            leftButtons: [
              {
                title: 'cancel',
                id: 'cancel',
              }
            ]
          }
        });
        this.props.createNewInvoiceBegin();
      }
    }
  }

  _keyExtractor = item => {
    return item.id;
  }

  getCodeName = (id) => {
    const res = this.props.codes.filter(code => code.id === id);
    return res[0].name;
  }

  deleteInvoiceCallback = () => {
    this.props.navigator.popToRoot({
      animated: true,
      animationType: 'slide-horizontal',
    });
  }

  renderInvoiceItem = ({ item }) => {
    return (
      <InvoiceItem
        key={item.id}
        invoice={item}
        onPress={() => {
          this.props.navigator.push({
            screen: 'postinvoice.ViewInvoiceScreen',
            title: `Invoice #${item.number}`,
            passProps: {
              invoice: item,
              getCodeName: this.getCodeName,
              deleteInvoice: this.props.deleteInvoice,
              deleteInvoiceCallback: this.deleteInvoiceCallback
            }
          });
        }}
      />
    );
  }

  render() {
    console.log('this.props.invoices: ', this.props.invoieces);
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          stickySectionHeadersEnabled
          style={{ flex: 1 }}
          sections={[
            { data: this.props.invoices, title: 'Section One' }
          ]}
          renderSectionHeader={({ section }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 24, }}>{section.title}</Text>
            </View>
          )}
          // data={this.props.invoices}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderInvoiceItem}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { invoices, codes } = invoicesReducer;
  return { invoices, codes };
};

export default connect(mapStateToProps, {
  createNewInvoiceBegin,
  deleteInvoice,
  fetchInvoices
})(InvoicesHome);
