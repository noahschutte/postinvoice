import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const InventorySheetListItem = ({ item, onPress }) => {
  const date = item.date;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textStyle}>
        {date.substring(5,7) + '/' + date.substring(8) + '/' + date.substring(0,4)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default InventorySheetListItem;
