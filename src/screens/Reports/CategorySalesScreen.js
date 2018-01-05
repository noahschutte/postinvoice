import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class CategorySalesScreen extends Component <{}> {
  render() {
    return (
      <View>
        <Text>Category Sales Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, {})(CategorySalesScreen);
