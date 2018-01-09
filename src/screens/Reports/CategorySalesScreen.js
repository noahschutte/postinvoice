import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import { onChangeSales, createReport } from '../../actions/reportActions';
import InventorySheetInput from '../../components/InventorySheetInput';
import SingleButton from '../../components/SingleButton';

class CategorySalesScreen extends Component <{}> {

  onSubmit = () => {
    const {
      beerSales,
      wineSales,
      foodSales,
      startingInventorySheet,
      endingInventorySheet,
      invoiceStartDate,
      invoiceEndDate,
    } = this.props.reportsReducer;
    this.props.createReport({
      startInventorySheetId: startingInventorySheet,
      endInventorySheetId: endingInventorySheet,
      startDateRange: invoiceStartDate,
      endDateRange: invoiceEndDate,
      beerSalesTotal: beerSales.slice(1),
      wineSalesTotal: wineSales.slice(1),
      foodSalesTotal: foodSales.slice(1),
    });
  }

  render() {
    const { wineSales, beerSales, foodSales } = this.props.reportsReducer;
    return (
      <View style={{ flex: 1 }}>
        <InventorySheetInput
          onChangeAmount={this.props.onChangeSales}
          amount={wineSales}
          type='Wine'
        />
        <InventorySheetInput
          onChangeAmount={this.props.onChangeSales}
          amount={beerSales}
          type='Beer'
        />
        <InventorySheetInput
          onChangeAmount={this.props.onChangeSales}
          amount={foodSales}
          type='Food'
        />
        <SingleButton buttonText='Submit' onPress={this.onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = ({ reportsReducer }) => {
  return { reportsReducer };
};

export default connect(mapStateToProps, {
  createReport,
  onChangeSales,
})(CategorySalesScreen);
