import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import LineItems from '../../components/LineItems';

class AddItemsScreen extends Component <{}> {
  render() {
    return (
      <View>
        <LineItems items={this.props.items} />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { items } = invoicesReducer.newInvoice;
  return { items };
};

export default connect(mapStateToProps, {})(AddItemsScreen);
