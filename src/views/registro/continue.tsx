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
        <Text style={styles.topText}>Continuar con</Text>
        <Text style={styles.subText}>
          Como deseas iniciar la próxima vez?
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.linkLo}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.linkLo}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.linkLo}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.linkLo}>Continue with Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Continue;
