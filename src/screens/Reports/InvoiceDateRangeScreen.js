import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class InvoiceDateRangeScreen extends Component <{}> {
  render() {
    return (
      <View>
        <Text>Invoice Date Range Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {})(InvoiceDateRangeScreen);
