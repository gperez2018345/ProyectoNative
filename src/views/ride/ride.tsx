/*import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import React from 'react';
import styles from './ride.styles';
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';

const Ride = ({}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation();
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.topText}>Ofrecer un Ride</Text>
        <Text style={styles.subText}>crea tus propias rutas en el mapa</Text>
        <Searchbar
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.buscador}
        />
        <TouchableOpacity style={styles.signinButton} onPress={() => {}}>
          <Text style={styles.signinButtonText}>Agregar Ruta +</Text>
        </TouchableOpacity>
        <Searchbar
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.buscador}
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Ride;*/
import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './ride.styles';
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';

export default () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation();
  const onChangeSearch = query => setSearchQuery(query);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={styles.topText}>Ofrecer un Ride</Text>
          <Text style={styles.subText}>crea tus propias rutas en el mapa</Text>
          <Searchbar placeholder="Donde estas?" style={styles.buscador} />
          <TouchableOpacity style={styles.signinButton} onPress={() => {}}>
            <Text style={styles.signinButtonText}>Agregar Ruta +</Text>
          </TouchableOpacity>
          <Searchbar placeholder="A donde vas?" style={styles.buscador} />
          <Searchbar
            placeholder="agregar acompañante+"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.buscador}
          />
        </View>
        <View style={styles.fecha}>
          <Button title="asignar fecha" onPress={() => setOpen(true)} />
          <DatePicker
            style={styles.buscador}
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            // registrarse e ir a iniciar sesion
            navigation.navigate('route');
          }}>
          <Text style={styles.link}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
