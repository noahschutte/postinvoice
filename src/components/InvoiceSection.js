import React from 'react';
import { View, Text } from 'react-native';

const InvoiceSection = ({ sectionType, sectionData, getCodeName }) => {

  const renderSectionData = () => {
    const currency = (dollars) => {
      if (typeof dollars === 'string') {
        dollars = dollars.split(',').join('');
      }
      dollars = parseFloat(dollars);
      return isNaN(dollars) ? false : dollars.toFixed(2);
    };

    if (sectionType !== 'Line Items') {
      return (
        <Text style={styles.itemTextStyle}>
          {sectionType === 'Invoice Total' ? '$'+currency(sectionData.slice(1)) : sectionData}
        </Text>
      );
    }

    return sectionData.map(d => {
      return (
        <View style={styles.lineItemsWrapper} key={d.id || d.code.name + d.amount}>
          <View>
            <Text style={styles.itemTextStyle}>
              {d.code ? d.code.name : getCodeName(d.code_id)} -
            </Text>
          </View>
          <View>
            <Text style={styles.itemTextStyle}>
              {' $' + currency(d.amount)}
             </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionTypeWrapper}>
        <Text style={styles.sectionTypeText}>
          {sectionType}:
        </Text>
      </View>
      <View style={styles.itemWrapper}>
        {renderSectionData()}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionTypeWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 25,
  },
  sectionTypeText: {
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
