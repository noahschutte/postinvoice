import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { onChangeVendorName, temporaryAddVendor } from '../../actions/invoiceActions';
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
      isNew: true,
      id: 'temporary_id',
      name: this.state.newVendorName,
    });
    this.setState({ selectedVendor: this.state.newVendorName });
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
    if (this.state.selectedVendor !== item.name){
      return (
        <TouchableOpacity
          key={item.id}
          style={styles.vendorContainer}
          onPress={() => this.onPress(item.name)}
        >
          <Text style={styles.vendorTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.selectedVendorContainer}
        onPress={() => this.onPress(item.name)}
      >
        <Text style={styles.vendorTextStyle}>{item.name}</Text>
        <Icon name='check' size={30} color='green' style={styles.iconStyle} />
      </TouchableOpacity>
    );
  }

  confirmVendor = () => {
    this.props.onChangeVendorName(this.state.selectedVendor);
    this.props.navigator.push({
      screen: 'postinvoice.InvoiceNumberScreen',
      title: 'Add Invoice Number',
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7 }}>
          <FlatList
            style={styles.vendorListContainer}
            data={this.props.vendors}
            keyExtractor={this._keyExtractor}
            renderItem={this.rendorVendor}
            extraData={this.state}
          />
        </View>

        <TwoButtons
          leftText='New'
          onLeftPress={this.addVendorModal}
          rightText='Confirm'
          onRightPress={this.confirmVendor}
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
  const { vendors } = invoicesReducer;
  return { vendors };
};

export default connect(mapStateToProps, {
  onChangeVendorName,
  temporaryAddVendor
})(SelectVendorScreen);
