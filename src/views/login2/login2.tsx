import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import styles from '../../../styles';

const LogIn2 = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.topText}>Login</Text>
        <Text style={styles.subText}>Enter your credentials to continue</Text>
        <View style={styles.container2}>
          <View style={styles.logo}>
            <Image
              source={require('../../resource/images/user.png')}
              style={styles.imgLogo}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TextInput style={styles.textBox} placeholder="User or Email" />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textBox}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // iniciar sesion para continuar
          }}>
          <Text style={styles.linkLo}>log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogIn2;
