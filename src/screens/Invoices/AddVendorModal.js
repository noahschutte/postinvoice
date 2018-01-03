import React, { Component } from 'react';
import { View, TextInput, Text, } from 'react-native';
import { connect } from 'react-redux';

import { onChangeVendorName } from '../../actions/invoiceActions';
import TwoButtons from '../../components/TwoButtons';

class AddVendorModal extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center',  }}>

        <View style={{ backgroundColor: '#fff', margin: 25, borderRadius: 10, }}>
          <View style={{ paddingHorizontal: 25, paddingVertical: 50, }}>
            <Text style={{ fontSize: 26, paddingBottom: 25, }}>Add Vendor</Text>
            <TextInput
              style={{ fontSize: 24, }}
              onChangeText={this.props.onChangeText}
              autoFocus={true}
            />
          </View>

          <TwoButtons
            leftText='Cancel'
            rightText='Confirm'
            style={{ flex: null }}
            onLeftPress={this.props.navigator.dismissAllModals}
            onRightPress={this.props.addVendor} // Add Vendor function
          />

        </View>

      </View>
    );
  }
}

const mapStateToProps = ({ invoicesReducer }) => {
  const { newInvoice } = invoicesReducer;
  return { newInvoice };
};

export default connect(mapStateToProps, { onChangeVendorName })(AddVendorModal);
