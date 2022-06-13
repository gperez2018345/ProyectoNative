/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import Login from './src/views/login/index';
import Signup from './src/views/signup/signup';
import Login2 from './src/views/login2/login2';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//const RegistroStack = createNativeStackNavigator();

/*const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   return (
     <NavigationContainer>
       <RegistroStack.Navigator initialRouteName="Signup">
         <RegistroStack.Screen name="Signup" component={Signup} />
         <RegistroStack.Screen name="Login" component={Login} />
       </RegistroStack.Navigator>
     </NavigationContainer>
   );
 };*/

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
