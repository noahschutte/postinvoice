import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ReportsListItem = ({ onPress, startDate, endDate }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{startDate} - {endDate}</Text>
    </TouchableOpacity>
  );
};

export default ReportsListItem;
