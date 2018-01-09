import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { createNewReportBegin, fetchReports } from '../../actions/reportActions';

class ReportsScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.props.fetchReports();
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'add') {
        this.props.createNewReportBegin();
        this.props.navigator.push({
          screen: 'postinvoice.InventoryRangeScreen',
          title: 'Inventory Date Range',
          navigatorStyle: {
            navBarTitleTextCentered: true,
          },
          passProps: {
            intent: 'postinvoice.InvoiceDateRangeScreen',
            intentTitle: 'Invoice Date Range',
          },
          navigatorButtons: {
            leftButtons: [
              {
                title: 'cancel',
                id: 'cancel',
              }
            ]
          }
        });
      }
    }
  }

  render() {
    return (
      <View>
        <Text>
          Reports Screen
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ reportsReducer }) => {
  const { reports } = reportsReducer;
  return { reports };
};

export default connect(mapStateToProps, {
  createNewReportBegin,
  fetchReports,
})(ReportsScreen);
