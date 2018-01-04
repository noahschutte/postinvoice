import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';

import { onChangeInventoryAmount } from '../../actions/InventorySheetActions';
import InventorySheetInput from '../../components/InventorySheetInput';

class InputInventoryScreen extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <InventorySheetInput
          onChangeAmount={onChangeInventoryAmount}
          type='Wine'
        />
        <InventorySheetInput
          onChangeAmount={onChangeInventoryAmount}
          type='Beer'
        />
        <InventorySheetInput
          onChangeAmount={onChangeInventoryAmount}
          type='Food'
        />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{
              backgroundColor: '#efeffa',
              padding: 15,
              elevation: 1,
              borderRadius: 2,
            }}
            onPress={() => alert('pressed')}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer }) => {
  const { beerAmount, foodAmount, wineAmount } = inventorySheetsReducer;
  return { beerAmount, foodAmount, wineAmount };
};

export default connect(mapStateToProps, { onChangeInventoryAmount })(InputInventoryScreen);
