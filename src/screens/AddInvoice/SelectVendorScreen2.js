import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Autocomplete from 'react-native-autocomplete-input';

import {
  onChangeVendorName,
  temporaryAddVendor
} from '../../actions/invoiceActions';
import VendorItem from './VendorItem';

class SelectVendorScreen extends Component <{}> {
  state = {
    query: '',
    newVendorName: '',
  };

  addVendorModal = () => {
    this.props.navigator.showModal({
      screen: 'postinvoice.AddVendorModal',
      navigatorStyle: {
        navBarHidden: true,
      },
      passProps: {
        addVendor: this.addVendor,
        onChangeText: this.onChangeText,
      },
    });
  }

  addVendor = () => {
    this.props.navigator.dismissAllModals();
    this.confirmVendor({
      isNew: true,
      id: 'temporary_id',
      name: this.state.newVendorName,
    });

  }

  confirmVendor = (vendor) => {
    if (vendor.name) {
      vendor = vendor.name;
    }
    this.props.onChangeVendorName(vendor);
    this.props.navigator.push({
      screen: 'postinvoice.InvoiceNumberScreen',
      title: 'Add Invoice Number',
    });
  }

  onChangeText = (text) => {
    this.setState({ newVendorName: text });
  };

  onPress = (vendorName) => {
    if (vendorName === 'Add new vendor?') {
      this.addVendorModal();
    } else {
      this.confirmVendor(vendorName);
    }
  }

  _filterData(query) {
    let { vendors } = this.props;
    if (query === '') {
      return vendors;
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    vendors = vendors.filter(vendor => vendor.name.search(regex) >= 0);
    if (vendors.length > 0) {
      return vendors;
    } else {
      return [{ name: 'Add new vendor?' }];
    }
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
          renderItem={item => <VendorItem onPress={() => this.onPress(item.name)} vendor={item} /> }
        />
      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { vendors } = invoicesReducer;
  return { vendors };
};

export default connect(mapStateToProps, {
  onChangeVendorName,
  temporaryAddVendor
})(SelectVendorScreen);
