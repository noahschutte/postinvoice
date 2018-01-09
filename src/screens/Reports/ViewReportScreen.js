import React from 'react';
import { View, Text } from 'react-native';

const ViewReportScreen = ({ report }) => {
  return (
    <View>
      <Text>Report No. {report.id}</Text>
    </View>
  );
};

export default ViewReportScreen;
