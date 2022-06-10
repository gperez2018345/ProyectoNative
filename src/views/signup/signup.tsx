import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';


const Signup = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.topText}>Email & Password</Text>
        <Text style={styles.subText}>
          Fill the form to join or create a new account
        </Text>
        <View style={styles.container}>
          <TextInput style={styles.textBox} placeholder="Email" />
          <TextInput style={styles.textBox} placeholder="Password" />
          <TextInput style={styles.textBox} placeholder="Confirm Password" />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // registrarse e ir a iniciar sesion
            navigation.navigate('Login');
          }}>
          <Text style={styles.link}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
