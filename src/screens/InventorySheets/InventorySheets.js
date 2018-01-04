import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class InventorySheets extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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

  render() {
    return (
      <View>
        <Text>Inventory Sheets</Text>
      </View>
    );
  }
}

export default connect()(InventorySheets);
