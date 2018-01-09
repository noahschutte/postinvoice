import React from 'react';
import { View, Text } from 'react-native';

import ReportScreenItem from '../../components/ReportScreenItem';
import TextLink from '../../components/TextLink';

const ViewReportScreen = ({ reportData }) => {
  const { startInvoiceDateRange, endInvoiceDateRange } = reportData;
  const formatDate = date => {
    const d = new Date(date),
          month = d.getUTCMonth() + 1,
          day = d.getUTCDate(),
          year = d.getUTCFullYear();
    return [month, day, year].join('/');
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.textStyle, { marginTop: 20 }]}>
        Breakdown of COGs from
      </Text>
      <Text style={[styles.textStyle, styles.introText]}>
        <Text style={styles.dateStyle}>{formatDate(startInvoiceDateRange)} </Text>
        to
        <Text style={styles.dateStyle}> {formatDate(endInvoiceDateRange)}</Text>
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
      <View style={styles.footerContainer}>
        <Text style={styles.textStyle}>
          Based off invoices between those dates, as well as inventory calculated from
        </Text>
        <TextLink textStyle={[styles.textStyle, styles.textLinkStyle]} text='this sheet' />
        <Text style={styles.textStyle}>and</Text>
        <TextLink textStyle={[styles.textStyle, styles.textLinkStyle]} text='this sheet' />
      </View>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  textLinkStyle: {
    color: '#117',
    textDecorationLine: 'underline',
  },
  dateStyle: {
    color: '#117',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
};

export default ViewReportScreen;
