import React from 'react';
import { View, Text } from 'react-native';

const InvoicesHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {title}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    elevation: 1,
    borderRadius: 2,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 6,
    marginLeft: 15,
  },
};

export default InvoicesHeader;
