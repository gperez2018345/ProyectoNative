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
} from 'react-native';
import Login from './src/views/login/login';
import Signup from './src/views/signup/signup';
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
