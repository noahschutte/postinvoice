import React, { Component } from 'react';
import { View, SectionList } from 'react-native';
import { connect } from 'react-redux';

import {
  createNewInvoiceBegin,
  deleteInvoice,
  fetchInvoices
} from '../../actions/invoiceActions';

import InvoicesHeader from '../../components/InvoicesHeader';
import InvoiceListItem from '../../components/InvoiceListItem';

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
          title: 'Invoice Date',
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

  renderInvoiceListItem = ({ item }) => {
    return (
      <InvoiceListItem
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

  createSections = invoices => {
    let sections = [];
    let date;
    invoices.forEach(invoice => {
      const d = new Date(invoice.date).getUTCDate();
      if (d != date) {
        date = d;
        sections = [
          ...sections,
          {
            title: this.formatDate(invoice.date),
            data: [invoice],
          }
        ];
      } else {
        let r = sections[sections.length -1];
        r.data = [
          ...r.data,
          invoice,
        ];
      }
    });
    return sections;
  }

  formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getUTCMonth() + 1),
      day = '' + d.getUTCDate();

  if (day.length < 2) day = '0' + day;

  return [month, day].join('/');
  }

  render() {
    const chronologizedArray = () => {
      return this.props.invoices.sort((a,b) => {
        return new Date(b.date) - new Date(a.date);
      });
    };
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          stickySectionHeadersEnabled
          style={{ flex: 1 }}
          sections={this.createSections(chronologizedArray())}
          renderSectionHeader={({ section }) => <InvoicesHeader title={section.title} />}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderInvoiceListItem}
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
