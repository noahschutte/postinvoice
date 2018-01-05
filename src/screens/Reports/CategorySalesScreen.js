import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { onChangeSales } from '../../actions/reportActions';
import InventorySheetInput from '../../components/InventorySheetInput';
import SingleButton from '../../components/SingleButton';

class CategorySalesScreen extends Component <{}> {

  onSubmit = () => {
    alert('submitted!');
    // submit to report creation
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <InventorySheetInput
          onChangeAmount={this.props.onChangeSales}
          amount={this.props.wineAmount}
          type='Wine'
        />
        <InventorySheetInput
          onChangeAmount={this.props.onChangeSales}
          amount={this.props.beerAmount}
          type='Beer'
        />
        <InventorySheetInput
          onChangeAmount={this.props.onChangeSales}
          amount={this.props.foodAmount}
          type='Food'
        />
        <SingleButton buttonText='Submit' onPress={this.onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, {
  onChangeSales,
})(CategorySalesScreen);
