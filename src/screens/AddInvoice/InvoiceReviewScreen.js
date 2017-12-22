import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class InvoiceReviewScreen extends Component <{}> {
  render() {
    return (
      <View>
        <Text>Invoice review screen</Text>
      </View>
    );
  }
}

export default connect()(InvoiceReviewScreen);
