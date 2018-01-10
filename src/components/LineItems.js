import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const LineItems = ({ items, editItem }) => {
  return items.map(item => {
    return (
      <View style={styles.container} key={item.code.name}>
        <View style={styles.codeContainer}>
          <Text style={styles.codeTextStyle}>{item.code.name}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountStyle}>${item.amount}</Text>
        </View>
        <TouchableOpacity onPress={() => editItem(item)} style={styles.iconContainer}>
          <Icon name='pencil-square-o' size={24} color={'#181'} />
        </TouchableOpacity>
      </View>
    );
  });
};

const styles = {
  container: {
    flexDirection: 'row',
  },
  codeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeTextStyle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  amountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountStyle: {
    fontSize: 26,
  },
  iconContainer: {
    flex: 0.15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 6,
    marginHorizontal: 3,
  }
};

export default LineItems;
