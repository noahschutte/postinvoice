import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { temporaryAddVendor } from '../../actions/invoiceActions';
import TwoButtons from '../../components/TwoButtons';

class SelectVendorScreen extends Component <{}> {
  state = {
    selectedVendor: '',
    newVendorName: '',
  }

  onPress = (selectedVendor) => {
    this.setState({ selectedVendor });
  }

  onChangeText = (newVendorName) => {
    this.setState({ newVendorName });
  }

  addVendor = () => {
    this.props.temporaryAddVendor({
      id: 'temporary_id',
      supplierName: this.state.newVendorName,
    });
    this.setState({ selectedVendor: 'temporary_id' });
    this.props.navigator.dismissAllModals();
  }

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

  _keyExtractor = item => item.id;

  rendorVendor = ({ item }) => {
    if (this.state.selectedVendor !== item.id){
      return (
        <TouchableOpacity
          key={item.id}
          style={styles.vendorContainer}
          onPress={() => this.onPress(item.id)}
        >
          <Text style={styles.vendorTextStyle}>{item.supplierName}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.selectedVendorContainer}
        onPress={() => this.onPress(item.id)}
      >
        <Text style={styles.vendorTextStyle}>{item.supplierName}</Text>
        <Icon name='check' size={30} color='green' style={styles.iconStyle} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7 }}>
          <FlatList
            style={styles.vendorListContainer}
            data={this.props.invoices}
            keyExtractor={this._keyExtractor}
            renderItem={this.rendorVendor}
            extraData={this.state}
          />
        </View>

        <TwoButtons
          leftText='New'
          onLeftPress={this.addVendorModal}
          rightText='Confirm'
          onRightPress={() => {
            this.props.navigator.push({
              screen: 'postinvoice.InvoiceNumberScreen',
              title: 'Add Invoice Number',
            });
          }}
        />

      </View>
    );
  }
}

const styles = {
  vendorListContainer: {
    flex: 1,
  },
  selectedVendorContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vendorTextStyle: {
    fontSize: 26,
    margin: 6,
  },
  vendorContainer: {
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  iconStyle: {
    margin: 5,
    alignSelf: 'center',
    paddingRight: 25,
  }
};

const mapStateToProps = ({ invoicesReducer }) => {
  const { invoices } = invoicesReducer;
  return { invoices };
};

export default connect(mapStateToProps, { temporaryAddVendor })(SelectVendorScreen);
