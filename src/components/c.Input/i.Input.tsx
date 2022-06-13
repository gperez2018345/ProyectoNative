import {TextInput} from 'react-native';
import inputS from './s.Input';
import React from 'react';
import theme from '../../theme';

const InputS = ({text, type, secure, changed}) => {
  return (
    <TextInput
      placeholderTextColor={theme.colors.BLACK}
      placeholder={text}
      onChangeText={changed}
      style={inputS.inputS}
      keyboardType={type}
      secureTextEntry={secure}
    />
  );
};

export default InputS;
