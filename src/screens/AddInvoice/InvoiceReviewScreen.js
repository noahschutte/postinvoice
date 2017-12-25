import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class InvoiceReviewScreen extends Component <{}> {
  render() {
    console.log('newInvoice', this.props.newInvoice);
    return (
      <View>
        <Text>Invoice review screen</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { newInvoice } = invoicesReducer;
  return { newInvoice };
};

export default connect(mapStateToProps)(InvoiceReviewScreen);
