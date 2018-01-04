import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';

import {
  deleteInventorySheet,
  fetchInventorySheets
} from '../../actions/inventorySheetActions';
import InventorySheetListItem from '../../components/InventorySheetListItem';

class InventorySheets extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.props.fetchInventorySheets();
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
            intent: 'postinvoice.InputInventoryScreen',
            intentTitle: '$ of Inventory On Hand',
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
        // this.props.createNewInvoiceBegin();
      }
    }
  }

  renderInventorySheetListItem = ({ item }) => {
    return (
      <InventorySheetListItem
        item={item}
        onPress={() => this.invoiceShow(item)}
      />
    );
  }

  _keyExtractor = item => {
    return item.id;
  }

  invoiceShow = item => {
    let date = item.date;
    date = date.substring(5,7) + '/' + date.substring(8) + '/' + date.substring(0,4);
    this.props.navigator.push({
      screen: 'postinvoice.ViewInventorySheetScreen',
      title: date,
      passProps: {
        item,
        deleteInventorySheet: this.props.deleteInventorySheet,
      },
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.inventorySheets}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderInventorySheetListItem}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer }) => {
  const { inventorySheets } = inventorySheetsReducer;
  return { inventorySheets };
};

export default connect(mapStateToProps, {
  deleteInventorySheet,
  fetchInventorySheets
})(InventorySheets);
