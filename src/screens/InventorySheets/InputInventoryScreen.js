import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';

import { onChangeInventoryAmount } from '../../actions/inventorySheetActions';
import InventorySheetInput from '../../components/InventorySheetInput';

class InputInventoryScreen extends Component <{}> {

  onSubmit = () => {
    this.props.navigator.push({
      screen: 'postinvoice.ReviewInventoryScreen',
      title: 'Review',
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <InventorySheetInput
          onChangeAmount={this.props.onChangeInventoryAmount}
          amount={this.props.wineAmount}
          type='Wine'
        />
        <InventorySheetInput
          onChangeAmount={this.props.onChangeInventoryAmount}
          amount={this.props.beerAmount}
          type='Beer'
        />
        <InventorySheetInput
          onChangeAmount={this.props.onChangeInventoryAmount}
          amount={this.props.foodAmount}
          type='Food'
        />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{
              backgroundColor: '#efeffa',
              padding: 15,
              elevation: 1,
              borderRadius: 2,
            }}
            onPress={this.onSubmit}
          >
            <Text>Submit</Text>
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
