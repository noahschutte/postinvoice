import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const SingleButton = ({ onPress, buttonText }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{
          backgroundColor: '#efeffa',
          padding: 15,
          elevation: 1,
          borderRadius: 2,
        }}
        onPress={onPress}
      >
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleButton;
