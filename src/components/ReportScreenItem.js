import React from 'react';
import { View, Text } from 'react-native';

const ReportScreenItem = ({ type, data }) => {
  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text style={styles.categoryTextStyle}>{type}: </Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.cogsTextStyle}>{data}</Text>
      </View>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTextStyle: {
    fontSize: 26,
  },
  cogsTextStyle: {
    fontSize: 26,
  }
};

export default ReportScreenItem;
