import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import SingleButton from '../../components/SingleButton';
import { onChangeInvoiceNumber } from '../../actions/invoiceActions';

class InvoiceNumberScreen extends Component <{}> {
  onPress = () => {
    this.props.navigator.push({
      screen: 'postinvoice.AddItemsScreen',
      title: 'Add Items',
    });
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <TextInput
            autoFocus={true}
            style={styles.textInputStyle}
            value={this.props.newInvoice.invoiceNumber}
            onChangeText={this.props.onChangeInvoiceNumber}
          />
        </View>

        <SingleButton onPress={this.onPress} buttonText='Confirm' />

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
  textInputStyle: {
    width: Dimensions.get('window').width - 20,
    fontSize: 26,
  }
};

const mapStateToProps = ({ invoicesReducer }) => {
  const { newInvoice } = invoicesReducer;
  return { newInvoice };
};

export default connect(mapStateToProps, { onChangeInvoiceNumber })(InvoiceNumberScreen);
