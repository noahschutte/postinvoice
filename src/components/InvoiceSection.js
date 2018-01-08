import React from 'react';
import { View, Text } from 'react-native';

const InvoiceSection = props => {


  const item = () => {
    const currency = (dollars) => {
      if (typeof dollars === 'string') {
        dollars = dollars.split(',').join('');
      }
      dollars = parseFloat(dollars);
      return isNaN(dollars) ? false : dollars.toFixed(2);
    };

    if (props.itemType !== 'Line Items') {

      if (props.itemType === 'Date') {
        let date = props.item;
        const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getUTCMonth() + 1),
            day = '' + d.getUTCDate(),
            year = d.getUTCFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [month, day, year].join('/');
      };
      date = formatDate(date);
        return (
          <Text style={styles.itemTextStyle}>
            {date}
          </Text>
        );
      }

      return (
        <Text style={styles.itemTextStyle}>
          {props.item}
        </Text>
      );
    }

    return props.item.map(item => {
      return (
        <View style={styles.lineItemsWrapper} key={item.id || item.code + item.amount}>
          <View>
            <Text style={styles.itemTextStyle}>
              {item.code ? item.code.name : props.getCodeName(item.code_id)} -
            </Text>
          </View>
          <View>
            <Text style={styles.itemTextStyle}>
              {' $' + currency(item.amount)}
             </Text>
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

export default InvoiceSection;
