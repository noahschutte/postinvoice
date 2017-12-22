import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

class AddItemsScreen extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.itemsContainer}>
          <TextInput
            style={styles.itemCodeInputStyle}
          />
          <TextInput
            style={styles.itemTotalInputStyle}
            keyboardType='numeric'
          />
        </View>

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
  itemsContainer: {
    flex: 2,
    alignItems: 'center',
    marginLeft: 50,
    // width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemCodeInputStyle: {
    flex: 5,
    fontSize: 26,
  },
  itemTotalInputStyle: {
    flex: 2,
    textAlign: 'right',
    fontSize: 24
  }
};

export default connect()(AddItemsScreen);
