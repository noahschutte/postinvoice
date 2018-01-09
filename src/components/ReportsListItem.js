import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ReportsListItem = ({ onPress, startDate, endDate }) => {
  const formatDate = (date) => {
    const d = new Date(date),
          month = d.getUTCMonth() + 1,
          day = d.getUTCDate();
    return [month, day].join('/');
  };
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{formatDate(startDate)} - {formatDate(endDate)}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'flex-start',
    borderBottomWidth: 0.5,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginVertical: 15,
  },
};

export default ReportsListItem;
