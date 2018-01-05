import React from 'react';
import { View, Text } from 'react-native';

const InvoiceSection = props => {


  const item = () => {
    const formatMoney = (dollars) => {
      dollars.toString();
      // separate dollars from cents, format pennies
      let amounts = dollars.split('.');
      if (amounts[1].length === 1 && amounts[1]) {
        amounts[1] += '0';
      }
      return amounts.join('.');
    };

    if (props.itemType !== 'Line Items') {
      if (props.itemType === 'Date') {
        let date = props.item;
        const formatDate = (date) => {
        var d = new Date(date)    ,
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
      };
        date = formatDate(date);
        return (
          <Text style={styles.itemTextStyle}>
            {date.substring(5,7) + '/' + date.substring(8) + '/' + date.substring(0,4)}
          </Text>
        );
      }
      return (
        <Text style={styles.itemTextStyle}>
          {props.itemType == 'Invoice Total' ? formatMoney(props.item) : props.item}
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
              {' $' + formatMoney(item.amount)}
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
