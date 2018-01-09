import React from 'react';
import { View, Text } from 'react-native';

import ReportScreenItem from '../../components/ReportScreenItem';

const ViewReportScreen = ({ reportData }) => {
  const { startInvoiceDateRange, endInvoiceDateRange } = reportData;
  console.log('reportData: ', reportData);
  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.textStyle, styles.introText]}>
        Breakdown of COGs from
      </Text>
      <Text style={[styles.textStyle, styles.introText]}>
        <Text style={styles.dateStyle}>{startInvoiceDateRange} </Text> 
        to
        <Text style={styles.dateStyle}> {endInvoiceDateRange}</Text>
      </Text>

      <ReportScreenItem
        type='Wine'
        data={reportData.wineCostPercentage}
      />
      <ReportScreenItem
        type='Beer'
        data={reportData.beerCostPercentage}
      />
      <ReportScreenItem
        type='Food'
        data={reportData.foodCostPercentage}
      />
      <Text style={styles.textStyle}>
        Based off invoices between those dates, as well as inventory calculated from
        this report and this report
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    padding: 5,
  },
  introText: {
    textAlign: 'center',
  },
  dateStyle: {
    color: '#117',
  }
};

export default ViewReportScreen;
