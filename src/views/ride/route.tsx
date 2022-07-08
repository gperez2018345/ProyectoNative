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
import MapViewDirections from 'react-native-maps-directions';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const SignUp = () => {
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
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
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 14.6256953,
            longitude: -90.5359687,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={'AIzaSyAl0HmQXXjnCCC6-royC4T_2H2aNLEOMjg'}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
