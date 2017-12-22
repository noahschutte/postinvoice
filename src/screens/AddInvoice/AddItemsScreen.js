import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import LineItems from './LineItems';

class AddItemsScreen extends Component <{}> {
  render() {
    console.log('this.props', this.props);
    return (
      <View style={{ flex: 1 }}>

        <LineItems
          item={this.props.items[0]}
        />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            style={styles.confirmButtonStyle}
            onPress={() => this.props.navigator.push({
              screen: 'postinvoice.InvoiceReviewScreen',
              title: 'Confirm Invoice',
            })}
            >
              <Text>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  confirmButtonStyle: {
    backgroundColor: '#efeffa',
    padding: 15,
    elevation: 1,
    borderRadius: 2,
  },
};

const mapStateToProps = ({ invoicesReducer }) => {
  const items = invoicesReducer.newInvoice.items;
  return { items };
};

export default connect(mapStateToProps)(AddItemsScreen);
