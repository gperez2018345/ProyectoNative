import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './continue.styles';
import {useNavigation} from '@react-navigation/native';

const Continue = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            // registrarse e ir a iniciar sesion
            navigation.navigate('Login');
          }}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.topText}>Principal</Text>
        <Text style={styles.subText}>
          Selecciona una opción para poder continuar.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // registrarse e ir a iniciar sesion
            navigation.navigate('signUp');
          }}>
          <Text style={styles.link}>Crear cuenta </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Continue;
