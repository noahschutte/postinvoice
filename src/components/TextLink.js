import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const TextLink = ({ onPress, text, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextLink;
