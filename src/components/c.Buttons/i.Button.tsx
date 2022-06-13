import {TouchableOpacity, Text} from 'react-native';
import btnStyle from './s.Button';
import React from 'react';

const styleB = ({text, pressed}) => {
  return (
    <TouchableOpacity style={btnStyle.btnForm} onPress={pressed}>
      <Text style={btnStyle.textB}>{text}</Text>
    </TouchableOpacity>
  );
};

export default styleB;
