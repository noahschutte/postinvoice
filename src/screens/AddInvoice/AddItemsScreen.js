import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Autocomplete from 'react-native-autocomplete-input';

import {
  addNewLine,
  onChangeItemAmount,
  onChangeItemCode,
} from '../../actions/invoiceActions';

import LineItem from './LineItem';

class AddItemsScreen extends Component <{}> {

  state = {
    query: '',
    codes: [],
  };

  componentDidMount() {
    let codes = [];
    Object.entries(this.props.codes).forEach(entry => {
      codes = [...codes, entry[1].name];
    });
    this.setState({ codes });
  }

  findCode(query) {
    const { codes } = this.state;

    if (query === '') {
      return codes;
    }

    const regex = new RegExp(`${query.trim()}`, 'i');

    return codes.filter(code => code.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const codes = this.findCode(query);
    const lineItems = this.props.items.map(item => {
      const index = this.props.items.indexOf(item);
      return (
        <LineItem
          key={index}
          item={item}
          onChangeItemAmount={this.props.onChangeItemAmount}
          onChangeItemCode={this.props.onChangeItemCode}
        />
      );
    });

    return (

      <View style={{ flex: 1 }}>

        <Autocomplete
          data={codes}
          containerStyle={{ flex: 1 }}
          onChangeText={text => this.setState({ query: text })}
          placeholder='Search Codes'
          renderItem={item => {
            console.log('item: ', item);
            return (
              <View>
                <Text>{item}</Text>
              </View>
            );
          }}
        />

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
  const { newInvoice, codes } = invoicesReducer;
  const items = newInvoice.items;
  return { items, codes };
};

export default connect(mapStateToProps, {
  addNewLine,
  onChangeItemAmount,
  onChangeItemCode,
})(AddItemsScreen);
