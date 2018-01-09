import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import { postInventorySheet } from '../../actions/inventorySheetActions';
import InventoryReviewSection from '../../components/InventoryReviewSection';
import SingleButton from '../../components/SingleButton';

class ReviewInventoryScreen extends Component <{}> {

  onConfirm = () => {
    const { date, foodAmount, beerAmount, wineAmount } = this.props;
    const callback = () => this.props.navigator.popToRoot({
      animated: true,
    });
    this.props.postInventorySheet({
      date,
      foodAmount,
      beerAmount,
      wineAmount,
    }, callback);
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
        <SingleButton
          buttonText='Confirm'
          onPress={this.onConfirm}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ inventorySheetsReducer }) => {
  const { beerAmount, foodAmount, wineAmount, date } = inventorySheetsReducer;
  return { beerAmount, foodAmount, wineAmount, date };
};

export default connect(mapStateToProps, { postInventorySheet })(ReviewInventoryScreen);
