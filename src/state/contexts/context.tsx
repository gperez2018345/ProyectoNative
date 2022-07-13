import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {App} from '../../../App';
import {NavigationContext, useNavigation} from '@react-navigation/native';
import {loginReducer, initialLoginState} from '../reducers/auth';

const AuthContext = React.createContext();

const UserProvider = () => {
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );
  const actions = React.useMemo(
    () => ({
      signIn: async (userName: string, password: string) => {
        let userToken: any;
        userToken = null;
        if (userName == 'xavier@gmail.com' && password == '1234') {
          try {
            userToken = 'fss';
            await AsyncStorage.setItem('token', userToken);
            loginState.singedIn = true;
            Alert.alert('', `Welcome, ${userName}`);
          } catch (err) {
            console.log(err);
          }
        } else if (userName != 'Xavi' || password != '1234') {
          Alert.alert('Error en email o contraseña');
          loginState.singedIn = false;
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('token');
        } catch (err) {
          console.log(err);
        }
        dispatch({type: 'LOGOUT'});
      },
      restoreToken: async () => {
        let token = null;
        try {
          token = await AsyncStorage.getItem('token');
        } catch (err) {
          console.log(err, 'Error');
        }
        dispatch({type: 'RESTORE_TOKEN', payload: {token}});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={actions}>
      <App />
    </AuthContext.Provider>
  );
};

export default AuthContext;
export {UserProvider, AuthContext};
