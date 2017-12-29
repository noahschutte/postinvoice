import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { fetchInvoices } from '../actions/invoiceActions';

import InvoiceItem from '../components/InvoiceItem';

class HomeScreen extends Component <{}> {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.props.fetchInvoices();
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'sideMenu') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'open',
        });
      }
      if (event.id == 'add') {
        this.props.navigator.push({
          screen: 'postinvoice.SelectDateScreen',
          title: 'Select Date',
          navigatorStyle: {
            navBarTitleTextCentered: true,
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
      }
    }
  }

  _keyExtractor = item => {
    return item.id;
  }

  renderInvoiceItem = ({ item }) => {
    return <InvoiceItem key={item.id} item={item} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.invoices}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderInvoiceItem}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { invoices } = invoicesReducer;
  return { invoices };
};

export default connect(mapStateToProps, { fetchInvoices })(HomeScreen);
