import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const VendorItem = ({ count, vendor, onPress }) => {
  return (
    <TouchableOpacity style={[
        styles.container,
        { backgroundColor: count % 2 === 0 ? '#ddd' : '#eee' }
      ]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{vendor.name}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.5)'
  },
  textStyle: {
    fontSize: 20,
    padding: 7,
    paddingLeft: 12,
  },
};

export default VendorItem;
