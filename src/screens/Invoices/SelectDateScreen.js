import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';

import SingleButton from '../../components/SingleButton';
import InvoicePicker from '../../components/InvoicePicker';
import { onChangeDate } from '../../actions/invoiceActions';

class SelectDateScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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

  getWeek = (d) => {
    var date = new Date(d);
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  getPeriod = (date) => {
    let week = this.getWeek(date);
    const period = Math.ceil(week/4);
    week %= 4;
    week = (week === 0 ? 4 : week);
    return [period, week];
  }

  onChangeDate = (date) => {
    this.props.onChangeDate(date, this.getPeriod(date));
  }

  confirmDate = (date) => {
    this.props.onChangeDate(date, this.getPeriod(date));
    let screen = this.props.intent;
    let title = this.props.intentTitle;
    this.props.navigator.push({
      screen,
      title,
    });
  }

  render() {
    const { date, onChangeDate, period, week } = this.props;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <DatePicker
          style={styles.datepickerStyle}
          androidMode='default'
          customStyles={{
            dateText: styles.dateTextStyle,
            dateInput: styles.dateInputStyle,
          }}
          placeholder={date}
          mode='date'
          format='MM-DD-YYYY'
          date={date}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          onDateChange={this.onChangeDate}
        />

        <InvoicePicker
          label='Period'
          selectedValue={period}
          onValueChange={value => onChangeDate(date, [value, week])}
          options={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
        />
        <InvoicePicker
          label='Week'
          selectedValue={week}
          onValueChange={value => onChangeDate(date, [period, value])}
          options={[1,2,3,4,5]}
        />

        <SingleButton
          onPress={() => this.confirmDate(date)}
          buttonText='Confirm'
        />
      </View>
    );
  }
}

const styles = {
  datepickerStyle: {
    width: Dimensions.get('window').width,
    flex: 1.5,
    paddingBottom: 50,
    justifyContent: 'flex-end',
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

const mapStateToProps = ({ invoicesReducer }) => {
  const { date, period, week } = invoicesReducer.newInvoice;
  return { date, period, week };
};

export default connect(mapStateToProps, { onChangeDate })(SelectDateScreen);
