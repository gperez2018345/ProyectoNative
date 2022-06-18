import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import styles from '../../../styles';
import {useNavigation} from '@react-navigation/native';

const VistaUser = ({}) => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../res/img/jeep.png')} />
      </View>
    </SafeAreaView>
  );
};

export default VistaUser;
