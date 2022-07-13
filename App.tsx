import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Login from './src/views/login/index';
import Principal from './src/views/principal/index';
import Login2 from './src/views/login2/login2';
import signup from './src/views/registro/w-index';
import verify from './src/views/registro/v-index';
import Ride from './src/views/ride/index';
import Route from './src/views/ride/route-index';
import Continue from './src/views/registro/c-index';
import confi from './src/views/ride/c-index';
import {AuthContext, UserProvider} from './src/state/contexts/context';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginReducer, initialLoginState} from './src/state/reducers/auth';
import {enableLatestRenderer} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

enableLatestRenderer();

const Stack = createNativeStackNavigator();

const App = () => {
  const [isToken, setIsToken] = React.useState('');
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken: any;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('token');
      } catch (err) {
        console.log(err);
      }
      dispatch({type: 'RETRIVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Principal} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Login2} />
        <Stack.Screen name="login2" component={Login2} />
        <Stack.Screen name="signUp" component={signup} />
        <Stack.Screen name="verify" component={verify} />
        <Stack.Screen name="ride" component={Ride} />
        <Stack.Screen name="route" component={Route} />
        <Stack.Screen name="Continue" component={Continue} />
        <Stack.Screen name="confi" component={confi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
export {App};
