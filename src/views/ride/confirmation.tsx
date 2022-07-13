import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './confirmation.styles';

const Confirmation = ({}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.subText}>Muchas Gracias!</Text>
        <Text style={styles.topText}>Ya esta confirmado</Text>
        <View style={styles.centerImg}>
          <Image
            source={require('../../res/img/confirmacion.png')}
            style={styles.img}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;
