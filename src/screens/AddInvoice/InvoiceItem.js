import React from 'react';
import { View, Text } from 'react-native';

const InvoiceItem = props => {

  const item = () => {
    if (props.itemType != 'Line Items') {
      return (
        <Text style={styles.itemTextStyle} >{props.item}</Text>
      );
    }

    return props.item.map(item => {
      return (
        <View style={styles.lineItemsWrapper} key={item.code.name}>
          <View>
            <Text style={styles.itemTextStyle}>{item.code.name} - </Text>
          </View>
          <View>
            <Text style={styles.itemTextStyle}> ${item.amount}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemTypeWrapper}>
        <Text style={styles.itemTypeText}>
          {props.itemType}:
        </Text>
      </View>
      <View style={styles.itemWrapper}>
        {item()}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemTypeWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 25,
  },
  itemTypeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  itemWrapper: {
    flex: 3,
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  itemTextStyle: {
    fontSize: 20,
  },
  lineItemsWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',

  }
};

export default InvoiceItem;
