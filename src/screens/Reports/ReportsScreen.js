import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';

import {
  createNewReportBegin,
  fetchReports,
  showReport,
  showInventorySheet
} from '../../actions/reportActions';
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

  onItemPress = (reportId) => {
    const callback = (reportData) => {
      this.props.navigator.push({
        screen: 'postinvoice.ViewReportScreen',
        title: 'Report #' + reportId,
        passProps: {
          reportData,
          onPress: this.navigateToInventorySheet,
        },
      });
    };
    this.props.showReport(reportId, callback);
  }

  navigateToInventorySheet = (sheetId) => {

    const callback = (sheetData) => {
      function formatDate(date) {
      var d = new Date(date)    ,
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [month, day, year].join('/');
      }
      this.props.navigator.push({
        screen: 'postinvoice.ViewInventorySheetScreen',
        title: formatDate(sheetData.date),
        passProps: {
          item: sheetData,
          hideDelete: true,
        }
      });
    };
    this.props.showInventorySheet(sheetId, callback);
  }

  _keyExtractor = (item) => item.id;

  renderItem = ({ item }) => {
    return (
      <ReportsListItem
        onPress={() => this.onItemPress(item.id)}
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
  showReport,
  showInventorySheet
})(ReportsScreen);
