import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import {
  onChangeSales,
  createReport,
  showInventorySheet
} from '../../actions/reportActions';
import InventorySheetInput from '../../components/InventorySheetInput';
import SingleButton from '../../components/SingleButton';

class CategorySalesScreen extends Component <{}> {

  onSubmit = () => {
    const callback = (reportData) => {
      this.props.navigator.popToRoot({
        animated: false,
      });
      this.props.navigator.push({
        screen: 'postinvoice.ViewReportScreen',
        title: 'Report #' + reportData.id,
        passProps: {
          reportData,
          onPress: this.navigateToInventorySheet,
        },
      });
    };

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
    }, callback);
  }

  navigateToInventorySheet = (sheetId) => {

    const callback = (sheetData) => {
      function formatDate(date) {
      var d = new Date(date)    ,
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [month, day, year].join('/');
      }
      this.props.navigator.push({
        screen: 'postinvoice.ViewInventorySheetScreen',
        title: formatDate(sheetData.date),
        passProps: {
          item: sheetData,
          hideDelete: true,
        }
      });
    };
    this.props.showInventorySheet(sheetId, callback);
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
  showInventorySheet,
})(CategorySalesScreen);
