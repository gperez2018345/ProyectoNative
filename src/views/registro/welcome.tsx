import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './welcome.styles';
import {useNavigation} from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';

const SignUp = ({}) => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Guatemala'},
    {key: '2', value: 'Salvador'},
    {key: '3', value: 'Costa Rica'},
    {key: '4', value: 'Honduras'},
  ];
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.topText}>Welcome!</Text>
        <View style={styles.container}>
          <Text style={styles.subText}>Agrega tu numero de telefono</Text>
          <TextInput style={styles.textBox} placeholder="Numero de Telefono" />
        </View>
      </View>
      <View style={{paddingTop: 125}}>
        <SelectList
          data={data}
          setSelected={setSelected}
          dropdownStyles={{backgroundColor: 'gray'}}
          dropdownItemStyles={{marginLeft: 10, marginTop: 0}}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // registrarse e ir a iniciar sesion
          navigation.navigate('verify');
        }}>
        <Text style={styles.link}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
