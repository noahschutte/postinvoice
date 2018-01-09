import React from 'react';
import { View, Text } from 'react-native';

import ReportScreenItem from '../../components/ReportScreenItem';

const ViewReportScreen = ({ reportData }) => {
  console.log('reportData: ', reportData);
  return (
    <View>
      <Text>Report No. {reportData.id}</Text>
    </View>
  );
};

export default ViewReportScreen;
