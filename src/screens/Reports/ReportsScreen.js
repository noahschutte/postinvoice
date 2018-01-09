import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';

import { createNewReportBegin, fetchReports } from '../../actions/reportActions';
import ReportsListItem from '../../components/ReportsListItem';

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

  _keyExtractor = (item) => item.id;

  renderItem = ({ item }) => {
    return (
      <ReportsListItem
        onPress={() => alert('navigate to view report #' + item.id)}
        startDate={item.start_date_range}
        endDate={item.end_date_range}
      />
    );
  }

  render() {
    const data = this.props.reports;
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
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
