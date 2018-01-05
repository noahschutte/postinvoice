import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import { onChangeInventoryAmount } from '../../actions/inventorySheetActions';
import InventorySheetInput from '../../components/InventorySheetInput';
import SingleButton from '../../components/SingleButton';

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
        <SingleButton buttonText='Submit' onPress={this.onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer }) => {
  const { beerAmount, foodAmount, wineAmount } = inventorySheetsReducer;
  return { beerAmount, foodAmount, wineAmount };
};

export default connect(mapStateToProps, { onChangeInventoryAmount })(InputInventoryScreen);
