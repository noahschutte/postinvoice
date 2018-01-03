import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class InventorySheets extends Component <{}> {
  // static navigatorButtons = {
  //   navigatorButtons: {
  //     leftButtons: [
  //       {
  //         title: 'sideMenu',
  //         id: 'sideMenu',
  //       }
  //     ]
  //   }
  // }
  render() {
    return (
      <View>
        <Text>Inventory Sheets</Text>
      </View>
    );
  }
}

export default connect()(InventorySheets);
