import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-datepicker';

class SelectDateScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      date: new Date().toLocaleDateString(),
    };
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        this.props.navigator.pop({
          animated: true,
        });
      }
    }
  }

  confirmDate = (date) => {
    this.setState({ date });
    this.props.navigator.push({
      screen: 'postinvoice.SelectVendorScreen',
      title: 'Select Vendor',
    });
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <DatePicker
          style={styles.datepickerStyle}
          androidMode='default'
          customStyles={{
            dateText: styles.dateTextStyle,
            dateInput: styles.dateInputStyle,
          }}
          placeholder={this.state.date}
          mode='date'
          format='MM-DD-YYYY'
          date={this.state.date}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          onDateChange={this.confirmDate}
        />

        <TouchableOpacity
          style={styles.confirmButtonStyle}
          onPress={() => this.confirmDate(this.state.date)}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  datepickerStyle: {
    width: Dimensions.get('window').width,
    height: 400,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  dateTextStyle: {
    fontSize: 40,
  },
  dateInputStyle: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    margin: 7,
  },
  confirmButtonStyle: {
    backgroundColor: '#efeffa',
    padding: 15,
    elevation: 1,
    borderRadius: 2,
  },
};

export default SelectDateScreen;
