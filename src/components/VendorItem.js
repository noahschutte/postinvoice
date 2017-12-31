import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const VendorItem = ({ vendor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{vendor.name}</Text>
    </TouchableOpacity>
  );
};

export default VendorItem;
