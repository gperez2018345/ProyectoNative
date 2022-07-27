import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './route.styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import SelectList from 'react-native-dropdown-select-list';

const Route1 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'ruta a 5k'},
    {key: '2', value: 'ruta a 10k'},
    {key: '3', value: 'ruta a 20k'},
    {key: '4', value: 'ruta a 50k'},
    {key: '5', value: 'ruta a 90k'},
  ];
  return (
    <SafeAreaView style={styles.fondo}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details.geometry.location);
        }}
        fetchDetails={true}
        query={{
          key: 'AIzaSyAl0HmQXXjnCCC6-royC4T_2H2aNLEOMjg',
          language: 'en',
        }}
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 14.6256953,
            longitude: -90.5359687,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
      </View>
      <Text style={styles.subText}>El precio de la ruta es de Q.100</Text>
      <TouchableOpacity
        onPress={() => {
          // registrarse e ir a iniciar sesion
          navigation.navigate('confi');
        }}>
        <Text style={styles.link}>Confirmar Viaje</Text>
      </TouchableOpacity>
      <View style={styles.container1}>
        <Text style={styles.subText}>Selecciona tu ruta</Text>
        <SelectList
          data={data}
          setSelected={setSelected}
          dropdownStyles={{backgroundColor: 'white'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Route1;
