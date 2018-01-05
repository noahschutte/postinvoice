import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';

import SingleButton from '../../components/SingleButton';
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

  confirmDate = (date) => {
    this.props.onChangeDate(date);
    let screen = this.props.intent;
    let title = this.props.intentTitle;
    this.props.navigator.push({
      screen,
      title,
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
          placeholder={this.props.date}
          mode='date'
          format='MM-DD-YYYY'
          date={this.props.date}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          onDateChange={this.confirmDate}
        />

        <SingleButton
          onPress={() => this.confirmDate(this.props.date)}
          buttonText='Confirm'
        />
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
};

const mapStateToProps = ({ invoicesReducer }) => {
  const date = invoicesReducer.newInvoice.date;
  return { date };
};

export default connect(mapStateToProps, { onChangeDate })(SelectDateScreen);
