import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class InventoryRangeScreen extends Component <{}> {
  render() {
    return (
      <View>
        <Text>
          Inventory Range Screen
        </Text>
      </View>
    );
  }
}

export default connect()(InventoryRangeScreen);
