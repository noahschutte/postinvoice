import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { addNewLine } from '../../actions/invoiceActions';

import LineItem from './LineItem';

class AddItemsScreen extends Component <{}> {
  render() {
    const lineItems = this.props.items.map(item => {
      return (
        <LineItem key={item.code} item={item} />
      );
    });

    return (

      <View style={{ flex: 1 }}>

        <ScrollView style={{ flex: 2, paddingTop: 40 }}>
          {lineItems}

          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.addItemButtonStyle} onPress={this.props.addNewLine}>
              <Icon name='plus' size={30} color='#fafafa' />
            </TouchableOpacity>
          </View>
        </ScrollView>


        <View style={{ flex: 0.2, elevation: 1, alignItems: 'center' }}>
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
  addItemButtonStyle: {
    backgroundColor: 'green',
    marginLeft: 15,
    borderRadius: 10,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

const mapStateToProps = ({ invoicesReducer }) => {
  const items = invoicesReducer.newInvoice.items;
  return { items };
};

export default connect(mapStateToProps, { addNewLine })(AddItemsScreen);
