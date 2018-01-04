import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { createInventorySheet } from '../../actions/inventorySheetActions';
import InventoryReviewSection from '../../components/InventoryReviewSection';

class ReviewInventoryScreen extends Component <{}> {

  onConfirm = () => {
    const { date, foodAmount, beerAmount, wineAmount } = this.props;
    this.props.createInventorySheet({
      date,
      foodAmount,
      beerAmount,
      wineAmount,
    });
    this.props.navigator.popToRoot({
      animated: true,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <InventoryReviewSection
          amount={this.props.wineAmount}
          type='Wine'
        />
        <InventoryReviewSection
          amount={this.props.beerAmount}
          type='Beer'
        />
        <InventoryReviewSection
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
            onPress={this.onConfirm}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer }) => {
  const { beerAmount, foodAmount, wineAmount, date } = inventorySheetsReducer;
  return { beerAmount, foodAmount, wineAmount, date };
};

export default connect(mapStateToProps, { createInventorySheet })(ReviewInventoryScreen);
