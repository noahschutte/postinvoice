import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import { onChangeInvoiceNumber } from '../../actions/invoiceActions';

class InvoiceNumberScreen extends Component <{}> {
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

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            style={styles.confirmButtonStyle}
            onPress={() => alert('confirmed!')}
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
