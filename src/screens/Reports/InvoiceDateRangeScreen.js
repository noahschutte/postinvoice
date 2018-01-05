import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';

import { connect } from 'react-redux';

import SingleButton from '../../components/SingleButton';
import { onChangeInvoiceDateRange } from '../../actions/reportActions';

class InvoiceDateRangeScreen extends Component <{}> {
  state = {
    startDateRange: new Date().toLocaleDateString(),
    endDateRange: new Date().toLocaleDateString(),
  }

  onConfirm = () => {
    const { startDateRange, endDateRange } = this.state;
    this.props.onChangeInvoiceDateRange(startDateRange, endDateRange);

    this.props.navigator.push({
      screen: 'postinvoice.CategorySalesScreen',
      title: 'Input Total Sales',
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.dateRangeText}>
            Start Inventory Date Range
          </Text>
          <DatePicker
            style={styles.datepickerStyle}
            androidMode='default'
            customStyles={{
              dateText: styles.dateTextStyle,
              dateInput: styles.dateInputStyle,
            }}
            placeholder={this.state.startDateRange}
            mode='date'
            format='MM-DD-YYYY'
            date={this.state.startDateRange}
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={date => this.setState({ startDateRange: date })}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.dateRangeText}>
            End Invoice Date Range
          </Text>
          <DatePicker
            style={styles.datepickerStyle}
            androidMode='default'
            customStyles={{
              dateText: styles.dateTextStyle,
              dateInput: styles.dateInputStyle,
            }}
            placeholder={this.state.endDateRange}
            mode='date'
            format='MM-DD-YYYY'
            date={this.state.endDateRange}
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={date => this.setState({ endDateRange: date })}
          />
        </View>

        <SingleButton
          onPress={this.onConfirm}
          buttonText='Confirm'
        />

      </View>
    );
  }
}

const styles = {
  datepickerStyle: {
    width: Dimensions.get('window').width,
    padding: 50,
    justifyContent: 'center',
  },
  dateRangeText: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 25,
  },
  dateTextStyle: {
    fontSize: 40,
  },
  dateInputStyle: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    margin: 7,
  },
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {
  onChangeInvoiceDateRange,
})(InvoiceDateRangeScreen);
