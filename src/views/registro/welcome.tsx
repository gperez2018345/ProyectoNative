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
    {key: '0', value: 'Guatemala'},
    {key: '1', value: 'Salvador'},
    {key: '2', value: 'Costa Rica'},
    {key: '3', value: 'Honduras'},
  ];
  return (
    <View>
      <View>
        <Text style={styles.topText}>Bienvenido!</Text>
        <View style={styles.container}>
          <Text style={styles.subText}>Agrega tu numero de telefono</Text>
        </View>
      </View>
      <View style={{paddingTop: 160}}>
        <SelectList
          data={data}
          setSelected={setSelected}
          dropdownStyles={{backgroundColor: 'white'}}
          dropdownItemStyles={{margin: 1}}
        />
        <View>
          <TextInput style={styles.textBox} placeholder="Numero de Telefono" />
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate('verify');
            }}>
            Continue
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
