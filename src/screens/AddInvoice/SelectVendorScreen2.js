import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Autocomplete from 'react-native-autocomplete-input';

import { onChangeVendorName } from '../../actions/invoiceActions';

class SelectVendorScreen extends Component <{}> {
  state = {
    query: '',
  };

  confirmVendor = (vendor) => {
    this.props.onChangeVendorName(vendor);
    this.props.navigator.push({
      screen: 'postinvoice.InvoiceNumberScreen',
      title: 'Add Invoice Number',
    });
  }

  _filterData(query) {
    const { vendors } = this.props;
    if (query === '') {
      return vendors;
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return vendors.filter(vendor => vendor.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const data = this._filterData(query);

    return (
      <View style={{ flex: 1 }}>
        <Autocomplete
          data={data}
          containerStyle={{ flex: 1 }}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={{ borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.3)' }}
                onPress={() => this.confirmVendor(item.name)}
              >
                <Text style={{ fontSize: 24, marginLeft: 10, marginTop: 5, }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { vendors } = invoicesReducer;
  return { vendors };
};

export default connect(mapStateToProps, { onChangeVendorName })(SelectVendorScreen);
